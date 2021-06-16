export class MedicalSecretary{

  id: string;
  namePrefix: string;
  lastName: string;
  firstName: string;
  middleName: string;
  nameSuffix: string;
  fullName: string;
  gender: string;
  addressLine1: string;
  addressLine2: string;
  county: string;
  town: string;
  postCode: string;
  phoneNo: string;
  email: string;
  mobileNumber: string;
  medicalSecretaryContractType: string;
  amountRate: string;
  medicalSecretaryTypeID: 0;
  status: string;
  createdBy: string;
  lastModifiedBy: string;
 
}

export class ModelSecretary{
  id:number;
  namePrefix: string;
  lastName: string;
  firstName: string;
  middleName: string;
  nameSuffix: string;
  fullName: string;
  gender: string;
  addressLine1: string;
  addressLine2: string;
  county: string;
  town: string;
  postCode: string;
  phoneNo: string;
  email: string;
  mobileNumber: string;
  medicalSecretaryContractType: string;
  amountRate: string;
  medicalSecretaryTypeID:number=1;
  status: string;
  isActive: boolean;
  createdByID: number;
  lastModifiedBy: number;
  companyName: string;
  companyAddress: string;
  companyPhoneNumber: string;
  reportWritingCount: 0;
  additionalEmailJson: string;
  isDirectMedSecretary: true;
  isLinkMedSec: true;
  isHourlyFee: true;
  isPerRptFee: true;
  fees: string;
  isHourlyOrPerReportFee:string;
}

export class UpdateMedicalSecretaryStatus{
  id:number;
  modifiedBy:number;
  Event:string;
  value:number;
}