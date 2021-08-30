export class UserMenus{
    id: number;
    menuName: string;
    label: string;
    menuOrderSr: number;
    isActive:boolean=false;
    showSubMenu:boolean;
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
    showCrud:boolean
    c:boolean=true;
    r:boolean=true;
    u:boolean=true;
    d:boolean=true;
    isActive:boolean=false;
}