import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApplicationScreen } from 'src/app/Models/Users Model/Application Screen';
import { ApplicationScreenService } from 'src/app/Services/Users Services/application-screen.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-application-screen',
  templateUrl: './application-screen.component.html',
  styleUrls: ['./application-screen.component.css']
})
export class ApplicationScreenComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  ApplicationScreenData: Array<ApplicationScreen>= new Array();
  isAdmin : boolean = false;
  showselectedApplicationScreen: boolean = false;
  CreateApplicationScreen : ApplicationScreen = new ApplicationScreen();
  selectedApplicationScreen : ApplicationScreen = new ApplicationScreen();

  constructor(private ApplicationScreenService: ApplicationScreenService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("Application Screen");
    this.CreateApplicationScreen.Status = "A";
    this.ApplicationScreenService.getApplicationScreenData().subscribe(data=>{
      this.ApplicationScreenData = data.outputObject;
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

  selectedStatus(event){
    this.CreateApplicationScreen.Status = event;
  }

  selectedUpdateStatus(event){
    this.selectedApplicationScreen.Status = event;
  }

  createApplicationScreen(){

    this.ApplicationScreenService.CreateNewApplicationScreen(this.CreateApplicationScreen).subscribe((resp)=>{

      this.Toastr.success('Application Screen Created Successfully ');
      this.ngOnInit();
      },
      (err)=>{
        console.log(err);
      });
  }

  EditApplicationScreen(){

    this.ApplicationScreenService.UpdateApplicationScreen(this.selectedApplicationScreen).subscribe(resp=>{
      this.Toastr.success('Application Screen Updated Successfully ');
      this.ngOnInit();
      $("#editApplicationScreenModal").modal("hide");
      console.log(resp);
    },err=>{
      console.log(err);
    });

  }

  DeleteApplicationScreen(ID:any){

    this.ApplicationScreenService.DeleteApplicationScreen(ID).subscribe(resp=>{
      this.Toastr.success('Application Screen Deleted Successfully ');
      this.ngOnInit();
      $("#deleteApplicationScreenModal").modal("hide");
      console.log(resp);
    },err=>{
      console.log(err);
    });

  }

}

