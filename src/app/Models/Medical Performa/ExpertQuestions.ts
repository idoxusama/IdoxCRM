export class ExpertQuestion {
    id: number;
    expertTypeID: number;
    expertID: number;
    sectionName: string;
    questionName: string;
    srNo: number;
    qType: string;
    isOptional: boolean;
    isRequired: boolean;
    isActive: boolean;
    userID: number;
    options: Options[] = [];
}
export class Options {
    id: number;
    optionName: string;
    optionType: string;
    isActive: boolean;
    userID: number
}