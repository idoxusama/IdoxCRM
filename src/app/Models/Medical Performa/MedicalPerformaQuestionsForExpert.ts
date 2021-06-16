export class ExpertQuestions{
    sectionName: string;
    questionList:Array<MedicalPerformaQuestionsForExpert>=new Array();
}


export class MedicalPerformaQuestionsForExpert{
    id:number;
    expertTypeID:number;
    sectionName:string;
    questionName:string;
    isRequired:boolean;
    srNo:number;
    qType:string;
    isActive:boolean;
    isDeleted:boolean;
    createdBy:number;
    answer:string;
    isOptional:boolean;
    selectedOption:string;
    selectedCheckBoxes=[];
    options:Array<MedicalPerformaExpertOptions>=new Array();
}

export class MedicalPerformaExpertOptions{
    id:number;
    pefQForExpertID:number;
    optionName:string;
    optionType:string;
    isActive:boolean;
    isDeleted:boolean;
    createdBy:number;
    answer:string;
}

export class DraftAnswersForExpert{
    expertID:number;
    expertTypeID:number;
    referrerID:number;
    instructionID:number;
    medicalSecretaryID:number;
    caseRefNo:string;
    performaAnswersOFExpert:Array<PerformaAnswersOFExpert>=new Array();
}

export class PerformaAnswersOFExpert{
    id:number;
    performaQuestionnaireForExpertID:number;
    performaQuestionnaireOptionsForExpertID:number;
    expertID:number;
    expertTypeID:number;
    referrerID:number;
    instructionID:number;
    medicalSecretaryID:number;
    caseRefNo:string;
    answer:string;
    state:string;
    isText:boolean;
    performaQuestionnaireCode:string;
    reason:string;
    userID:number;
    performaQuestionnaireCodeOut:string;
    noOfState:number;
    isOptional:boolean;
}