export class UserMenus{
    id: number;
    menuName: string;
    label: string;
    menuOrderSr: number;
    showSubMenu:boolean=false;
    idoxSubMenuList:IdoxSubMenuList[];
}

export class IdoxSubMenuList{
    id: number;
    menuID: number;
    subMenuName: string;
    label: string;
    subMenuOrderSr: number;
    formUrl: string;
    userID: number;
    showCrud:boolean;
}