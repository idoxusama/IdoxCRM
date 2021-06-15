import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApplicationConfigurationService } from 'src/app/Services/Users Services/application-configuration.service';
import { ApplicationConfiguration } from 'src/app/Models/Users Model/Applicatiion Configuration';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-application-configuration',
  templateUrl: './application-configuration.component.html',
  styleUrls: ['./application-configuration.component.css']
})
export class ApplicationConfigurationComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  ApplicationConfigurationData: Array<ApplicationConfiguration>= new Array();


  constructor(private ApplicationConfigurationService: ApplicationConfigurationService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("Application Configuration");
    this.ApplicationConfigurationService.getApplicationConfigurationData().subscribe(data=>{
      this.ApplicationConfigurationData = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }


  Update(ApplicationScreenData:any)
  {
    this.ApplicationConfigurationService.UpdateApplicationConfiguration(ApplicationScreenData).subscribe(data=>{
      this.Toastr.success('Application Configuration Updated Successfully ');
      this.ngOnInit();
      },
      error=>{ 
        console.log(error);
      });
  }

}
