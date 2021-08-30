export class MenuSettings {
    menuSettingID: number;
    menuID: number;
    menuName: string;
    userID: number;
    roleID: number;
    isGeneralMenu: boolean;
    isUserTypeMenu: boolean;
    userTypeID: number;
    menuLabel: string;
    menuOrderSr: number;
    menuSettingName: string;
    isMenuSettingChange: boolean;
    menuSettingIsActive: boolean;
    menuSettingIsDeleted: boolean;
    subMenuSettingList: SubMenuSettingList[] = [];
}

export class SubMenuSettingList {
    subMenuSettingID: number;
    subMenuID: number;
    subMenuName: string;
    subMenuLable: string;
    subMenuSettingName: string;
    subMenuOrderSr: number;
    formUrl: string;
    subMenuSettingFormUrl: string;
    isSubMenuSettingsChange: boolean;
    subMenuSettingIsActive: boolean;
    subMenuSettingIsDeleted: boolean;
}

export class SaveMenuSettings {
    ID: number;
    MenuID: number;
    MenuUserID: number;
    RoleID: number;
    IsGeneralMenu: boolean;
    UserTypeID: number;
    IsUserTypeMenu: boolean;
    MenuName: string;
    MenuLabel: string;
    MenuOrderSr: number;
    UserID: number;
    subMenuSettingList:SaveSubMenuSettingList[]=[];
}

export class SaveSubMenuSettingList{

    ID: number;
    SubMenuID: number;
    SubMenuName: string;
    SubMenuLabel: string;
    SubMenuOrderSr: number;
    FormUrl: string
}