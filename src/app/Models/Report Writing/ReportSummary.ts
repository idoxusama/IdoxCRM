export class ReportSummary{
    id: number;
    instructionID: number;
    medicalSecretaryID: number;
    dateOfSourceCreate: string;
    rptLogStatus: string;
    rptLogIsCaseClosed: boolean;
    rptLogTotalSpendTime: string;
    createdBy: number;
    modifiedOn: string;
    rcdRevRptLogResponseList: [];
}

export class RcdRevRptLogResponseList{
    expertResponseID: number;
    expertRptLogID:number;
    dateOfResponseCreate: string;
    statusName: string;
    reponseStatusName: string;
    viewDate: Date;
    respondDate: string;
    responseIsCaseClosed: string;
    responseTotalSpendTime: string;
}