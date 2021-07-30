export class ExpertUser{
}

export class ExpertBasicInfo{
  id:number;
  namePrefix:string;
  lastName:string;
  firstName:string;
  middleName:string;
  gender:string;
  addressLine1:string;
  addressLine2:string;
  specialityID:number;
  subSpecialityID:number;
  userID:number;
  expertCode:string;
  phoneNo:string;
  email:string;
  createdBy:number;
  modifiedBy:number;
  isActive:number;
  expertType:number;
  assessmentTime:string;
  username:string;
  password:string;
}

export class ExpertContactInfo{
  id:number;
  county:string;
  town:string;
  postCode:string;
  phoneNo:string;
  alternatePhoneNo:string;
  faxNo:string;
  email:string;
  mobileNumber:string;
  generalEmail:string;
  companyID:number;
  userID:number;
}

export class ExpertCharges{
  id:number;
  iaCharges:string;
  dcCharges:string;
  perSessionCharges:string;
  mapAddress:string;
  mapLat:string;
  mapLong:string;
  userID:number;
}

export class ExpertBankDetail{
  id:number;
  expertID:number;
  bankName:number;
  accountTitle:string;
  accountNo:string;
  IBAN:string;
  sortCode:string;
  userID:number;
  isEditable:boolean;
}
export class ExpertUploadedDocs{
  id:number;
  expertID:number;
  documentName:string;
  documentPath:string;
  isActive:boolean;
  fileContent:string;
  type:string;
}

export class ExpertMedicalRequiredRecord{
  medicalRequiredRecordList:Array<MedicalRequiredRecordList>=new Array();
}

export class MedicalRequiredRecordList{
  id:number;
  expertTypeID:number;
  expertID:number;
  medicalRecordType:string;
  medicalRecordName:string;
  isRequired:boolean=true;
  userID:number;
  isEditable:boolean=false;
}