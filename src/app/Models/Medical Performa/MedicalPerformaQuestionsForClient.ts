export class ClientQuesitons{
    sectionName:string;
    questionList:Array<MedicalPerformaQuestionsForClient>=new Array();
}

export class MedicalPerformaQuestionsForClient{
    id:number;
    srNo:number;
    expertTypeID:number;
    questionName:string;
    questionType:string;
    isActive:number;
    answer:string;
    isRequired:boolean;
}

export class ExpertType{
    expertTypeID:number;
    expertCategories:string;
    createdBy:string;
    createdDate:Date;
    isDeleted:number;
}

export class DraftAnswersForClient{
    id:number;
    expertID:number;
    expertTypeID:number;
    referrerID:number;
    instructionID:number;
    medSecretaryID:number;
    caseRefNo:string;
    performaAnswersOFClient:Array<PerformaAnswersOFClient>=new Array();
}
export class PerformaAnswersOFClient{
    id:number;
    clientQuestionID:number;
    expertID:number;
    expertTypeID:number;
    referrerID:number;
    instructionID:number;
    medSecretaryID:number;
    answers:string;
    state:string;
    performaQuestionnaireCode:string;
    reason:string;
    userID:number;
    caseRefNo:string;
    performaQuestionnaireCodeOut:string;
    noOfState:number;
}