export class MedcoRecord{
    instructionID:number;
    recordName:string;
    recordPath:string;
    isReceived:boolean;
    isRequiredByExpert:boolean;
    files:File[];
    userID:number;
}