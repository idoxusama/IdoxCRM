export class ExpertVenue{

  ID: string
  ExpertID: string
  Description: string
  AddressLine1: string
  AddressLine2: string
  County: string
  Town: string
  PostCode: string
  PhoneNo: string
  IsParkingFacility: any 
  IsDisabledAccess: any
  ClinicType: string
  ExpertVenueTypeID: string
  MapLink: string
  Summary: string
  Status: string
  IsDeleted: string
  CreatedBy: string
  CreatedDate: string
  LastModifiedBy: string

}

export class SearchExpertVenue{

  ExpertClinicTypeID:number;
  ExpertID:number;

}