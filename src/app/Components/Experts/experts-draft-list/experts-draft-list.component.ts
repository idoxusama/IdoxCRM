import { Component, OnInit } from '@angular/core';
import { ExpertBasicInfo } from 'src/app/Models/Experts Model/User';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';

@Component({
  selector: 'app-experts-draft-list',
  templateUrl: './experts-draft-list.component.html',
  styleUrls: ['./experts-draft-list.component.scss']
})
export class ExpertsDraftListComponent implements OnInit {
  expertDraftProfiles:ExpertBasicInfo[]=[];
  constructor(private expertUserService: ExpertuserService) { }

  ngOnInit() {
    localStorage.removeItem('expertID');
    this.getDraftProfiles();
  }

  getDraftProfiles(){
    this.expertUserService.getExpertProfileInfo(0,"","draftprofile").subscribe((response)=>{
      debugger
      this.expertDraftProfiles=response.outputObject;
    },error=>{
      console.log(error);
    });
  }

}
