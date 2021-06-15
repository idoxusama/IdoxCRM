import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MedcoExpertsClinics,SearchExpertClinic } from 'src/app/Models/Experts Model/Medco Experts Clinics';
import { Venues } from 'src/app/Models/Experts Model/VenueModel';
import { MedicoExpertClinicsService } from 'src/app/Services/Experts Services/medico-expert-clinics.service';
import { MedcoexpertService } from 'src/app/Services/Experts Services/medcoexpert.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-experts-medcoexpertclinics',
  templateUrl: './experts-medcoexpertclinics.component.html',
  styleUrls: ['./experts-medcoexpertclinics.component.css']
})
export class ExpertsMedcoexpertclinicsComponent implements OnInit {
 @Output() headerTitle = new EventEmitter<string>();
 MedcoExpertClinicsData: Array<MedcoExpertsClinics>= new Array();
 MedcoExpertData:any;
 ExpertTypeList:any;
 ExpertsList:any;
 VenueData: Array<Venues>= new Array();
CreateMedcoExpertClinics: MedcoExpertsClinics = new MedcoExpertsClinics();
SelectedMedcoExpertClinics: MedcoExpertsClinics = new MedcoExpertsClinics();
SearchExpertClinics: SearchExpertClinic = new SearchExpertClinic();
AddLunchTime: boolean;
ShowMedcoExpertForm : boolean = false;
ShowPsychologistExpertForm : boolean = false;
ShowOrthopaedicExpertForm : boolean = false;
ShowRehabExpertForm : boolean = false;
ShowENTExpertForm : boolean = false;
ShowCBTExpertForm : boolean = false;
ShowHealthExpertForm : boolean = false;

  constructor(private MedicoExpertClinicsService: MedicoExpertClinicsService,private MedcoexpertService: MedcoexpertService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("Experts Clinic");
    this.AddLunchTime = false;
    this.CreateMedcoExpertClinics.isAvailableForGoPrivate = false;
    this.CreateMedcoExpertClinics.slotLength="0";
    this.CreateMedcoExpertClinics.startTime="08:00:00";
    this.CreateMedcoExpertClinics.endTime="17:00:00";
    this.CreateMedcoExpertClinics.lunchStartTime="13:00:00";
    this.CreateMedcoExpertClinics.lunchEndTime="13:20:00";
    this.SearchExpertClinics.ExpertClinicTypeID = 0;
    this.MedicoExpertClinicsService.getExpertClinicsData(this.SearchExpertClinics).subscribe(data=>{
      this.MedcoExpertClinicsData = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });

      this.MedicoExpertClinicsService.getMedcoExpertVenues().subscribe(data=>{
        this.VenueData = data.outputObject;
        },
        error=>{ 
          console.log(error);
        });

      this.MedcoexpertService.getAllExpertsData().subscribe(data=>{
        this.MedcoExpertData = data.outputObject;
        },
        error=>{ 
          console.log(error);
        });
        this.MedicoExpertClinicsService.GetExpertClinicType().subscribe(data=>{
          this.ExpertTypeList = data.outputObject;
          },
          error=>{ 
            console.log(error);
          });
    
  }

  SearchSelectedExpertType(data){
    this.SearchExpertClinics.ExpertClinicTypeID = data;
    this.MedicoExpertClinicsService.getSearchedExpertTypeData(this.SearchExpertClinics).subscribe(data=>{
      this.ExpertsList = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }

  SearchSelectedExpert(data){
    this.SearchExpertClinics.ExpertID = data;
  }

  SearchExpertClinic(){
    this.MedicoExpertClinicsService.getSearchedExpertClinicsData(this.SearchExpertClinics).subscribe(data=>{
      this.MedcoExpertClinicsData = data.outputObject;
      },
      error=>{ 
        console.log(error);
      });
  }

  SelectedExpertType(event:any){
    this.CreateMedcoExpertClinics.expertID = event;
   if(event == 1)
    {
      this.ShowMedcoExpertForm = true;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = false;
    }
   else if(event == 2)
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = true;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = false;
    }
   else if(event == 3)
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = true;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = false;
    }
    else if(event == 5)
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = true;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = false;
    }
    else if(event == 6)
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = true;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = false;
    }
    else if(event == 7)
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = true;
      this.ShowHealthExpertForm = false;
    }
    else if(event == 8)
    {
      this.ShowMedcoExpertForm = false;
      this.ShowPsychologistExpertForm = false;
      this.ShowOrthopaedicExpertForm = false;
      this.ShowRehabExpertForm = false;
      this.ShowENTExpertForm = false;
      this.ShowCBTExpertForm = false;
      this.ShowHealthExpertForm = true;
    }
  }



selectedVenue(event){
  for(var a=0;this.VenueData.length;a++){
    if(event == this.VenueData[a].id){
      this.CreateMedcoExpertClinics.description  = this.VenueData[a].description;
      this.CreateMedcoExpertClinics.addressLine1 = this.VenueData[a].addressLine1;
      this.CreateMedcoExpertClinics.town =         this.VenueData[a].town;
      this.CreateMedcoExpertClinics.postCode =     this.VenueData[a].postCode;
      this.CreateMedcoExpertClinics.phoneNo =      this.VenueData[a].phoneNo;
    }
  }
}
selectedSlot(event){
  this.CreateMedcoExpertClinics.slotLength = event;
  this.MedicoExpertClinicsService.getSlotLength(this.CreateMedcoExpertClinics).subscribe(data=>{
    this.CreateMedcoExpertClinics.availableSlots = data.availableSlot;
    },
    error=>{ 
      console.log(error);
    });
  
}
selectedClinicType(event){this.CreateMedcoExpertClinics.clinicType = event;}
selectedExpert(event){this.CreateMedcoExpertClinics.expertID = event;}
selectedStatus(event){this.CreateMedcoExpertClinics.status = event;}

Create(){
    this.MedicoExpertClinicsService.CreateMedicoExpertClinic(this.CreateMedcoExpertClinics).subscribe((resp)=>{

      this.Toastr.success('Medico Expert Clinic Created Successfully ');
      $("#CreateMedicoExpertClinicModal").modal("hide");
      this.ngOnInit();
      },
      (err)=>{
        console.log(err);
      });
}



selectedDetails(Data:any){
this.SelectedMedcoExpertClinics = Data;


if(this.SelectedMedcoExpertClinics.expertClinicTypeID == '1')
{
  this.ShowMedcoExpertForm = true;
  this.ShowPsychologistExpertForm = false;
  this.ShowOrthopaedicExpertForm = false;
  this.ShowRehabExpertForm = false;
  this.ShowENTExpertForm = false;
  this.ShowCBTExpertForm = false;
  this.ShowHealthExpertForm = false;
}
else if(this.SelectedMedcoExpertClinics.expertClinicTypeID == '2')
{
  this.ShowMedcoExpertForm = false;
  this.ShowPsychologistExpertForm = true;
  this.ShowOrthopaedicExpertForm = false;
  this.ShowRehabExpertForm = false;
  this.ShowENTExpertForm = false;
  this.ShowCBTExpertForm = false;
  this.ShowHealthExpertForm = false;
}
else if(this.SelectedMedcoExpertClinics.expertClinicTypeID == '3')
{
  this.ShowMedcoExpertForm = false;
  this.ShowPsychologistExpertForm = false;
  this.ShowOrthopaedicExpertForm = true;
  this.ShowRehabExpertForm = false;
  this.ShowENTExpertForm = false;
  this.ShowCBTExpertForm = false;
  this.ShowHealthExpertForm = false;
}
else if(this.SelectedMedcoExpertClinics.expertClinicTypeID == '5')
{
  this.ShowMedcoExpertForm = false;
  this.ShowPsychologistExpertForm = false;
  this.ShowOrthopaedicExpertForm = false;
  this.ShowRehabExpertForm = true;
  this.ShowENTExpertForm = false;
  this.ShowCBTExpertForm = false;
  this.ShowHealthExpertForm = false;
}
else if(this.SelectedMedcoExpertClinics.expertClinicTypeID == '6')
{
  this.ShowMedcoExpertForm = false;
  this.ShowPsychologistExpertForm = false;
  this.ShowOrthopaedicExpertForm = false;
  this.ShowRehabExpertForm = false;
  this.ShowENTExpertForm = true;
  this.ShowCBTExpertForm = false;
  this.ShowHealthExpertForm = false;
}
else if(this.SelectedMedcoExpertClinics.expertClinicTypeID == '7')
{
  this.ShowMedcoExpertForm = false;
  this.ShowPsychologistExpertForm = false;
  this.ShowOrthopaedicExpertForm = false;
  this.ShowRehabExpertForm = false;
  this.ShowENTExpertForm = false;
  this.ShowCBTExpertForm = true;
  this.ShowHealthExpertForm = false;
}
else if(this.SelectedMedcoExpertClinics.expertClinicTypeID == '8')
{
  this.ShowMedcoExpertForm = false;
  this.ShowPsychologistExpertForm = false;
  this.ShowOrthopaedicExpertForm = false;
  this.ShowRehabExpertForm = false;
  this.ShowENTExpertForm = false;
  this.ShowCBTExpertForm = false;
  this.ShowHealthExpertForm = true;
}
}

EditselectedVenue(event){
  for(var a=0;this.VenueData.length;a++){
    if(event == this.VenueData[a].id){
      this.SelectedMedcoExpertClinics.description  = this.VenueData[a].description;
      this.SelectedMedcoExpertClinics.addressLine1 = this.VenueData[a].addressLine1;
      this.SelectedMedcoExpertClinics.town         = this.VenueData[a].town;
      this.SelectedMedcoExpertClinics.postCode     = this.VenueData[a].postCode;
      this.SelectedMedcoExpertClinics.phoneNo      = this.VenueData[a].phoneNo;
    }
  }
}
EditselectedSlot(event){
  this.SelectedMedcoExpertClinics.slotLength = event;
  this.MedicoExpertClinicsService.getSlotLength(this.SelectedMedcoExpertClinics).subscribe(data=>{
    this.SelectedMedcoExpertClinics.availableSlots = data.availableSlot;
    },
    error=>{ 
      console.log(error);
    });
  
}
EditselectedClinicType(event){this.SelectedMedcoExpertClinics.clinicType = event;}
EditselectedExpert(event){this.SelectedMedcoExpertClinics.expertID = event;}
EditselectedStatus(event){this.SelectedMedcoExpertClinics.status = event;}


Update(){
  this.MedicoExpertClinicsService.UpdateMedicoExpertClinic(this.SelectedMedcoExpertClinics).subscribe((resp)=>{

    this.Toastr.success('Medico Ecpert Clinic Updated Successfully ');
    $("#EditMedicoExpertClinicModal").modal("hide");
    this.ngOnInit();
    },
    (err)=>{
      console.log(err);
    });
}

Delete(ID){
  this.MedicoExpertClinicsService.DeleteMedicoExpertClinic(ID).subscribe((resp)=>{
    this.Toastr.success('Medico Ecpert Clinic Deleted Successfully ');
    this.ngOnInit();
    },
    (err)=>{
      console.log(err);
    });
}


}