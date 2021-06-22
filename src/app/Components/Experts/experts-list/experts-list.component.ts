import { Component, OnInit } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { debug } from 'console';
import { ToastrService } from 'ngx-toastr';
import { ExpertBasicInfo } from 'src/app/Models/Experts Model/User';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';

@Component({
  selector: 'app-experts-list',
  templateUrl: './experts-list.component.html',
  styleUrls: ['./experts-list.component.scss']
})
export class ExpertsListComponent implements OnInit {
  expertsList: ExpertBasicInfo[] = [];
  filterList: ExpertBasicInfo[] = [];

  constructor(private expertUserService: ExpertuserService,
    private toasterService: ToastrService) { }

  ngOnInit() {
    localStorage.removeItem('expertID');
    this.getCompletedExpertsProfile();
  }

  getCompletedExpertsProfile() {
    this.expertUserService.getExpertProfileInfo("Expert",0, "", "completedprofile").subscribe((response) => {
      this.expertsList = response.outputObject;
      this.filterList = this.expertsList;
    }, error => {
      console.log(error);
    })
  }

  filterExperts(value:string) {
    debugger
    this.filterList = value ? this.expertsList.filter(e =>
         e.firstName.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || 
         e.lastName.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
         e.phoneNo.includes(value)) : this.expertsList;
  }

  updateStatus(id, event, value, functionName) {
    let model: any = {};
    model.id = id;
    model.event = event;
    model.value = value;
    model.functionName = functionName;
    model.userID = +localStorage.getItem('userID');

    this.expertUserService.updateProfileStatus(model).subscribe(response => {
      this.toasterService.success('Status update successfully.');
    }, error => {
      console.log(error);
    }, () => {
      this.getCompletedExpertsProfile();
    });
  }

  deleteProfile(id, event, statusValue, functionName) {
    let model: any = {};

    model.id = id;
    model.event = event;
    model.value = statusValue;
    model.functionName = functionName;
    model.userID = +localStorage.getItem('userID');

    this.expertUserService.updateProfileStatus(model).subscribe(response => {
    }, error => {
      console.log(error);
    }, () => {
      model.functionName = 'ExpertPersonalDocument';
      this.expertUserService.updateProfileStatus(model).subscribe(response => {
      }, error => {
        console.log(error);
      }, () => {
        model.functionName = 'ExpertBankDetail';
        this.expertUserService.updateProfileStatus(model).subscribe(response => {
          this.toasterService.success('Profile deleted successfuly');
        }, error => {
          console.log(error);
        }, () => {
          this.getCompletedExpertsProfile();
        });
      });
    })
  }
}
