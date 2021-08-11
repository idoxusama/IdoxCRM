export class MedSecRptLogResponse{
    medSecRptLogResponseID:number;
    medSecRptLogID:number;
    isImage:boolean;
    medSecRptLogResponseNote:string;
    medSecRptLogResponseState:number;
    logResponseIsCaseClosed:boolean;
    logResponseCaseStatusID:number;
    logResponseIsViewed:boolean;
    logResponseIsRespond:boolean;
    logResponseTotalSpendTime:string;
    medSecRptLogRefImgResponses:MedSecRptLogRefImgResponses[];
}

export class MedSecRptLogRefImgResponses{
    medSecRptLogReferenceImgResponseID: number;
    medSecRptLogReferenceImgID: number;
    responseReferenceImgPath: string;
    isRefImage: boolean;
    responseReferenceNote: string;
    responseReferenceState: number;
    responseReferenceIsCaseClosed: boolean;
    responseReferenceCaseStatusID: number;
    responseReferenceIsViewed: boolean;
    responseReferenceIsRespond: boolean;
    responseReferenceTotalSpendTime: number
}