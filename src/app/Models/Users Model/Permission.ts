export class GetRolePermissions {
    userRoleID: number;
    roleName: string;
    userID: number;
    isUserPermission: boolean;
    menuPermissionList: MenuPermissionList[]=[];
}

export class MenuPermissionList {
    permitMenuID: number;
    menuName: string;
    isActive:boolean;
    subMenuPermissionList:SubMenuPermissionList[]=[];
}

export class SubMenuPermissionList {
    permissionID: number;
    permitSubMenuID: number;
    subMenuName: string;
    c: boolean;
    r: boolean;
    u: boolean;
    d: boolean;
    isActive:boolean;
    showCrud:boolean=false;
}