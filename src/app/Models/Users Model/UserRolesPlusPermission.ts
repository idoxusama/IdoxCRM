export class UserRolePlusPermissions {
    id: number;
    userRoleID:number;
    roleName: string;
    userID: number;
    showSubMenu:boolean;
    userPermissionList: UserRolePermissions[]
}

export class UserRolePermissions {
    id: number;
    permissionID:number;
    permissionUserID: number;
    permitMenuID: number;
    permitSubMenuID: number;
    menuName: string;
    subMenuName:string;
    c: boolean=true;
    r: boolean=true;
    u: boolean=true;
    d: boolean=true;
    isUserPermission: boolean;
}