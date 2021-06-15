export class OutstandingClinicsModel{

      ExpertID: number;
      ExpertCreated: string;
      ClinicCreated: string;
      MapLink: string
      Summary: string;
      ExpertClinicID: string;
      Description: string
      NamePrefix: string
      FirstName: string
      LastName: string
      FullName: string
      AddressLine1: string
      AddressLine2: string
      County: string
      Town: string
      PostCode: string
      PhoneNo: string
      ClinicDate: string
      StartTime: string
      EndTime: string
      SlotLength: string
      LunchStartTime: string
      LunchEndTime: string
      BookingAppType: string
      BookedSlots: string
      UnavailableSlots: string
      ReservedSlots: string
      IsClinicListSent: any
      ClinicListSentDate: string
      FinalStartTime: string;
}

export class SearchOutstandingClinics {

  ExpertID:string;
  ExpertTypeID:string;
  StartDate:any;
  EndDate:any;

}