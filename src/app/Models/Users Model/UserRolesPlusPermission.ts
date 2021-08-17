export class UserRolePlusPermissions {
    id: number;
    roleName: string;
    userID: number;
    userPermissionList: UserRolePermissions[]
}

export class UserRolePermissions {
    id: number;
    permissionUserID: number;
    permitMenuID: number;
    permitSubMenuID: number;
    c: boolean=true;
    r: boolean=true;
    u: boolean=true;
    d: boolean=true;
    isUserPermission: boolean
}