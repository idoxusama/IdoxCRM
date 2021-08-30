import { SafeUrl } from "@angular/platform-browser";

export class ExpertRptLogResponse{
    expertRptLogResponseID:number;
    medSecRptLogResponseID:number;
    expertRptLogID:number;
    isImage:boolean;
    responseImgPath:string;
    imageDataUrl:SafeUrl|string;
    isOpen:boolean;
    expertRptLogResponseNote:string;
    expertRptLogResponseState:number;
    logResponseIsCaseClosed:boolean;
    logResponseCaseStatusID:number;
    logResponseIsViewed:boolean;
    logResponseIsRespond:boolean;
    logResponseTotalSpendTime:string;
    isSameUserType:boolean;
    expertRptLogRefImgResponse:ExpertReportLogRefImgResponse[];
}

export class ExpertReportLogRefImgResponse{
    expertRptLogReferenceImgResponseID: number;
    expertRptLogReferenceImgID: number;
    medSecRptLogReferenceImgID:number;
    isRefImage: boolean;
    responseReferenceNote: string;
    responseReferenceState: string;
    responseReferenceIsCaseClosed: boolean
    responseReferenceCaseStatusID: number;
    responseReferenceIsViewed: boolean;
    responseReferenceIsRespond: boolean;
    responseReferenceTotalSpendTime: string;
}