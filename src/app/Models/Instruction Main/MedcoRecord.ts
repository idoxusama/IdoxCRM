export class MedcoRecord{
    id:number;
    instructionID:number;
    recordName:string;
    recordPath:string;
    isReceived:boolean;
    isRequiredByExpert:boolean;
    files:File[];
    userID:number;
    fileContent:string;
    fileExtention:string;
}