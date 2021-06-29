import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Referrer } from 'src/app/Models/Referrer/referrer';
import { ReferrerService } from 'src/app/Services/Referrer/referrer.service';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';

@Component({
  selector: 'app-referrer-list',
  templateUrl: './referrer-list.component.html',
  styleUrls: ['./referrer-list.component.scss']
})
export class ReferrerListComponent implements OnInit {
  currentPage:number=1;
  referrerPersonalInfo:Referrer[]=[];
  constructor(
    private referrerService:ReferrerService,
    private settingService:SettingsService,
    private toasterService:ToastrService) { }

  ngOnInit() {
    this.getReferrerList();
  }

  getReferrerList(){
    this.referrerService.getReferrerPersonalInfo(0).subscribe(response=>{
      this.referrerPersonalInfo=response.outputObject;
    },error=>{
      console.log(error);
    });
  }

  deleteReferrer(id){
    let model:any={};
    model.id=id;
    model.event= 'IsDeleted';
    model.value=1;
    model.functionName='ReferrerPersonalInfo';
    model.userID=localStorage.getItem('userID');

    this.referrerService.updateReferrerStatus(model).subscribe(response=>{
      this.toasterService.success('Referrer deleted successfully.');
    },error=>{
      console.log(error);
    },()=>{
      this.getReferrerList();
    });
  }

}
