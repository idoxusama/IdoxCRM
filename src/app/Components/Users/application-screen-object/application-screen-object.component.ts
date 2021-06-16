import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApplicationScreen } from 'src/app/Models/Users Model/Application Screen';
import { ApplicationScreenObject } from 'src/app/Models/Users Model/Application Screen Object';
import { ApplicationScreenService } from 'src/app/Services/Users Services/application-screen.service';
import { ApplicationScreenObjectService } from 'src/app/Services/Users Services/application-screen-object.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-application-screen-object',
  templateUrl: './application-screen-object.component.html',
  styleUrls: ['./application-screen-object.component.css']
})
export class ApplicationScreenObjectComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  ApplicationScreenData: Array<ApplicationScreen>= new Array();
  ApplicationScreenObjectData: Array<ApplicationScreenObject>= new Array();
  isAdmin : boolean = false;
  showselectedApplicationScreen: boolean = false;
  CreateApplicationScreen : ApplicationScreenObject = new ApplicationScreenObject();
  selectedApplicationScreen : ApplicationScreenObject = new ApplicationScreenObject();

  constructor(private ApplicationScreenService: ApplicationScreenService,private ApplicationScreenObjectService: ApplicationScreenObjectService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("Application Screen Object");
    this.CreateApplicationScreen.Status = "A";
    this.ApplicationScreenService.getApplicationScreenData().subscribe(data=>{
      this.ApplicationScreenData = data.outputObject;
    },
    error=>{ 
      console.log(error);
    });

    this.ApplicationScreenObjectService.getApplicationScreenObjectData().subscribe(data=>{
      this.ApplicationScreenObjectData = data.outputObject;
    },
    error=>{ 
      console.log(error);
    });
  }

  selectedApplicationScreenDetail (event : any){
    this.selectedApplicationScreen = event;
    this.selectedApplicationScreen.Status = event.status;
    this.showselectedApplicationScreen = true;
  }

  selectedAppScreen(event){
    this.CreateApplicationScreen.AppScreen = event;
  }
  selectedStatus(event){
    this.CreateApplicationScreen.Status = event;
  }
  selectedUpdateStatus(event){
    this.selectedApplicationScreen.Status = event;
  }

  createApplicationScreen(){

    this.ApplicationScreenObjectService.CreateNewApplicationObjectScreen(this.CreateApplicationScreen).subscribe((resp)=>{

      this.Toastr.success('Application Screen Object Created Successfully ');
      this.ngOnInit();
      },
      (err)=>{
        console.log(err);
      });
  }

  EditApplicationScreen(){

    this.ApplicationScreenObjectService.UpdateApplicationObjectScreen(this.selectedApplicationScreen).subscribe(resp=>{
      this.Toastr.success('Application Screen Object Updated Successfully ');
      this.ngOnInit();
      $("#editApplicationScreenModal").modal("hide");
      console.log(resp);
    },err=>{
      console.log(err);
    });

  }

  DeleteApplicationScreen(ID:any){

    this.ApplicationScreenObjectService.DeleteApplicationObjectScreen(ID).subscribe(resp=>{
      this.Toastr.success('Application Screen Object Deleted Successfully ');
      this.ngOnInit();
      $("#deleteApplicationScreenModal").modal("hide");
      console.log(resp);
    },err=>{
      console.log(err);
    });

  }

}


