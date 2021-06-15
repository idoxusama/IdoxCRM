export class MedcoExpertsClinics{

  id: string;
  expertID: string;
  description:string;
  addressLine1: string;
  addressLine2: string;
  county:string;
  town:string;
  postCode: string;
  phoneNo: string;
  faxNo: string;
  clinicDate: string;
  slotLength: string;
  startTime: string;
  endTime: string;
  lunchStartTime:string;
  lunchEndTime:string;
  availableSlots:string;
  isAvailableForReferrer: string;
  clinicType:string;
  expertClinicTypeID:string;
  approvedDate:string;
  mapLink: string;
  summary: string;
  finalEndTime:string;
  clinicFullDate: string;
  isClosed:string;
  clinicCloseDate:string;
  isAvailableForGoPrivate: boolean;
  isClinicListSent: string;
  clinicListSentDate:string;
  finalStartTime:string;
  meetingLink: string;
  status: string;
  createdBy: string;
  lastModifiedBy: string;
 
}


export class SearchExpertClinic{

  ExpertClinicTypeID:number;
  ExpertID:number = 0;
  StartClinicDate:string = null;
  EndClinicDate:string = null;

}