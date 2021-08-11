import { SafeUrl } from "@angular/platform-browser";

export class MedSecRptLogs{
    expertRptLogID:number;
    medSecRptLogID:number;
    instructionID:number;
    medicalSecretaryID:number;
    stepMainID:number;
    stepSubID:number;
    isImage:boolean;
    imageDataUrl:SafeUrl|string;
    expertRptLogImgPath:string;
    expertRptLogDescription:number;
    expertRptLogUserNote:number;
    expertRptLogState:string;
    isViewed:boolean;
    isRespond:boolean;
    totalSpendTime:string;
    isCaseClosed:boolean;
    medSecRptLogReference:MedSecRptLogReferenceList[];
}
export class MedSecRptLogReferenceList{
    medSecRptLogReferenceImgID:number;
    expertRptLogRefImgID:number;
    isRefImage:boolean;
    isCaseClosed:boolean;
    imageDataUrl:SafeUrl|string;
    referenceImgPath:string;
    referenceNote:string;
}