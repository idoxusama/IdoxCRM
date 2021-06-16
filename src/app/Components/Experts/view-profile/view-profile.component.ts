import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ENGINE_METHOD_CIPHERS } from 'constants';
import { ExpertBankDetail, ExpertBasicInfo, ExpertCharges, ExpertContactInfo, ExpertUploadedDocs, MedicalRequiredRecordList } from 'src/app/Models/Experts Model/User';
import { ExpertuserService } from 'src/app/Services/Experts Services/expertuser.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  expertBasicInfo:ExpertBasicInfo;
  expertContactInfo:ExpertContactInfo;
  expertCharges:ExpertCharges;
  expertBankDetails: ExpertBankDetail[]=[];
  expertDocs : ExpertUploadedDocs[]=[];
  expertRequireMedicalRecord:MedicalRequiredRecordList[]=[];

  expertID:string;
  profileState:string;

  constructor(private expertUserService: ExpertuserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(parmas=>{
      this.expertID= parmas.get('id');
      this.profileState= parmas.get('state');
    });

    if(this.expertID && this.profileState){
      this.getExpertPersonalInfo();
      this.getExpertContactInfo();
      this.getExpertCharges();
      this.getExpertBankDetails();
      this.getExpertDocuments();
      this.getExpertRequiredMedicalRecord();
    }
  }

  getExpertPersonalInfo(){
    this.expertUserService.getExpertProfileInfo(this.expertID,"",this.profileState).subscribe(response=>{
      debugger
      this.expertBasicInfo = response.outputObject?response.outputObject.pop():null;
    },error=>{
      console.log(error);
    });
  }

  getExpertContactInfo(){
    this.expertUserService.getExpertProfileInfo(this.expertID,"",this.profileState).subscribe(response=>{
      this.expertContactInfo = response.outputObject?response.outputObject.pop():null;
    },error=>{
      console.log(error);
    });
  }

  getExpertCharges(){
    this.expertUserService.getExpertProfileInfo(this.expertID,"",this.profileState).subscribe(response=>{
      this.expertCharges = response.outputObject?response.outputObject.pop():null;
    },error=>{
      console.log(error);
    });
  }

  getExpertBankDetails(){
    this.expertUserService.getExpertBankDetailInfo(this.expertID).subscribe(response=>{
      this.expertBankDetails= response.outputObject;
    },error=>{
      console.log(error);
    });
  }

  getExpertDocuments(){
    this.expertUserService.getExpertPersonalDocuments(this.expertID).subscribe(response=>{
      this.expertDocs= response.outputObject;
    },error=>{
      console.log(error);
    });
  }

  getExpertRequiredMedicalRecord(){
    this.expertUserService.getExpertMedicalRequiredRecord(0,this.expertID).subscribe(response=>{
      this.expertRequireMedicalRecord=response.outputObject;
    },error=>console.log(error));
  }
}
