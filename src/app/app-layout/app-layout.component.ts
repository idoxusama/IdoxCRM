import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GenericServiceService } from '../Services/generic-service.service';
import { CMSSectionMenuService } from '../Services/CMS Services/cmssection-menu.service';
import { CMSMenuModule, CMSModule } from '../Models/CMS Model/cmsmodule.model';
import * as $ from "jquery";
@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  message: string;
  username: string;
  isAdmin: boolean = false;
  RegionalCoordinator: boolean = false;
  ProjectManager: boolean = false;
  @Output() headerTitle = new EventEmitter<string>();
  CMSSection: Array<CMSModule> = new Array();
  CMSMenu: Array<CMSMenuModule> = new Array();
  arr1: any;

  isCollapseDashboard = false;
  isCollapseUser = false;
  constructor(private CmsSectionMenuService: CMSSectionMenuService, private genericService: GenericServiceService) { }

  ngOnInit() {
    this.username = localStorage.getItem("userName")
    if (localStorage.getItem("role") != null && (localStorage.getItem("role") == 'RHC')) {
      this.isAdmin = true;

      this.getCMSSection();
      this.CMSMenu = this.arr1;
    }
    else {
      this.isAdmin = true;
    }
  }

  receiveHeaderTitle(componentReference) {
    //Below will subscribe to the searchItem emitter
    componentReference.headerTitle.subscribe((data) => {
      // Will receive the data from child here 

      this.message = data;
    });
  }

  logout() {
    this.genericService.Logout();
  }

  rendorSomething() {
    const data = ['zer', 'one'];
    return this.CMSSection
  };

  rendorSomeDiv() {
    const data1 = this.CMSMenu;
    console.log(data1);

    return '<li><a class="c-sidebar__link" routerLink="/Instruction/Setting">' + data1 + '</a></li>'
  };

  getCMSSection() {
    this.CmsSectionMenuService.getCMS().subscribe(data => {
      if (data.outputObject !== null) {
        this.CMSSection = data.outputObject;

        for (let index = 0; index < this.CMSSection.length; index++) {
          this.getCMSMenus(this.CMSSection[index].ID, this.CMSSection[index].Name)

          // const element = this.CMSSection[index].ID;
          //console.log(this.CMSMenu);
        }
      }
    }
    )
  };

  getCMSMenus(ID, SName) {
    this.CmsSectionMenuService.getCMSMenu(ID).subscribe(data => {
      if (data.outputObject !== null) {
        for (var i = 0; i < data.outputObject.length; i++) {
          this.CMSMenu = data.outputObject;
          //if (i < 1) {
          //this.CMSMenu.push(data.outputObject);
          var cmid = this.CMSMenu.find(x => x.CMSID == ID).CMSID;
          var cmname = this.CMSMenu.find(x => x.CMSName == SName).CMSName;
          var cmenuid = this.CMSMenu.find(x => x.MenuID == data.outputObject[i].MenuID).MenuID;
          var cmenuname = this.CMSMenu.find(x => x.MenuName == data.outputObject[i].MenuName).MenuName;
          this.arr1.push(
            {
              CMSID: cmid,
              CMSName: cmname,
              MenuID: cmenuid,
              MenuName: cmenuname,
            }
          );
        }
        console.log('array');
        console.log(this.arr1);
        return data.outputObject;
      }
    });
  }
  toggleSideBarMenu(event:any) {
    if ($(event.path[1]).hasClass('active') != true) {
      $('.sidebar .nav .nav-item .dropdwown-toggle').removeClass('active').next().slideUp();
      $(event.path[1]).addClass('active').next().slideDown();
    } else {
      $(event.path[1]).removeClass('active').next().slideUp();
    }
  }
}
