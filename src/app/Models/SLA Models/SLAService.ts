export class SLAService{
    id:number;
    expertID:number;
    expertServiceName:string;
    paymentTypesList:PaymentType[]=[];
    timeManagementInputList:TimeManagementInputList[]=[];
    isActive:boolean;
    createdBy:number;
}

export class PaymentType{
    paymentType:string;
    isShown:boolean;
}
export class TimeManagementInputList{
    slaTimeManagementInput:string;
}

export class ExpertSLAService{
    id:number;
    expertID:number;
    expertServiceID:number;
    slaServiceDescription:string;
    startRangeTime:string;
    endRangeTime:string;
    payment:string;
    paymentType:string;
    isActive:boolean;
    status:boolean;
    userID:number;
}

export class SLATimeManagement{
    id:number;
    expertID:number;
    expertServiceID:number;
    expertServiceName:string;
    estTime:string;
    estReturnTime:string;
    userID:number;
}