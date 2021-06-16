export class BankDetail{
    referrerBankDetailList:BankDetailList[]=[];
}

export class BankDetailList{
    id:number;
    referrerID:number;
    bankName:string;
    accountTitle:string;
    accountNo:string;
    sortCode:string;
    iban:string;
    userID:number;
}