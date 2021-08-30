import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';
import { ToastrService } from 'ngx-toastr';
import { IdoxSubMenuList, UserMenus } from 'src/app/Models/Menu/Menu';
import { GetRolePermissions, MenuPermissionList } from 'src/app/Models/Users Model/Permission';
import { UserRolePermissions, UserRolePlusPermissions } from 'src/app/Models/Users Model/UserRolesPlusPermission';
import { Select2DropdownService } from 'src/app/Services/select2-dropdown.service';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';
import { UserService } from 'src/app/Services/Users Services/user.service';

@Component({
  selector: 'app-user-permission',
  templateUrl: './user-permission.component.html',
  styleUrls: ['./user-permission.component.css']
})
export class UserPermissionComponent implements OnInit {
  public userRoleID: string;
  public userID: string;

  public roles: Array<Select2OptionData>;
  public users: Array<Select2OptionData>;

  public permissionsBy: string;
  public permissions: GetRolePermissions = new GetRolePermissions();
  public tempPermissions:GetRolePermissions=new GetRolePermissions();
  public permissionsTobeRemove: any[] = [];
  public permissionsTobeUpdate: any[] = [];
  public permissionsTobeAssign: any[] = [];

  public unAssignedPermissions: UserMenus[] = [];
  public userRolePlusPermissions: UserRolePlusPermissions[];

  constructor(private userService: UserService,
    private settingsService: SettingsService,
    private toasterService: ToastrService,
    private dropdownService:Select2DropdownService) { }

  ngOnInit() {
  }

  /* #region  Prepare Permissions Board */

  async getUserRoles() {
    let model = { RoleID: 0 };
    let result = await this.userService.getUserRole(model).toPromise();
    if (result.outputObject) {
      if (result.outputObject) {
        result.outputObject.map(e => e.text = e.roleName);
        this.roles = [];
        this.roles = this.dropdownService.prepareDropDown(this.roles, result.outputObject)
      }
    }
  }

  async getUsers() {
    let model =
    {
      ID: 0,
      UserTypeID: 0,
      UserRoleID: 0
    };

    let result = await this.userService.getUsers(model).toPromise();
    if (result) {
      this.users = [];
      result.outputObject.map(e => e.text = e.firstName + ' ' + e.lastName);
      this.users = this.dropdownService.prepareDropDown(this.users, result.outputObject);
    }
  }

  getPermissionBy(event) {
    this.permissionsBy = event.target.value;
    if (this.permissionsBy == 'ByUser') {
      this.getUsers();
    }
    else if (this.permissionsBy == 'ByRole') {
      this.getUserRoles();
    }
  }

  async getPermissions(event) {
    if (event.value == '') return;

    let model: any = {};
    model.RoleID = this.permissionsBy == 'ByRole' ? event.value : 0;
    model.UserPermissionID = 0;
    model.UserID = this.permissionsBy == 'ByUser' ? event.value : 0;

    this.userRoleID = this.permissionsBy == 'ByRole' ? event.value : 0;
    this.userID = this.permissionsBy == 'ByUser' ? event.value : 0;

    await this.getMenuWithSubMenu();
    let result = await this.userService.getUserRolePermission(model).toPromise();
    if (result.outputObject) {

      //will use this permissions object for filtering
      this.permissions = result.outputObject[0];
      this.permissions.menuPermissionList.forEach(element => {
        this.filterPermissionByIsActive(element);
      });
    }

    //get permissions againg
    //will use this temp permissions object for getting permissionID when add new permission to role
    let temp = await this.userService.getUserRolePermission(model).toPromise();
    if(temp)
      this.tempPermissions =temp.outputObject[0];
  }

  filterPermissionByIsActive(permission: MenuPermissionList) {
    let menu = this.unAssignedPermissions.find(e => e.id == permission.permitMenuID);
    menu.idoxSubMenuList.length = 0;

    permission.subMenuPermissionList.forEach((m, i) => {
      if (!m.isActive) {
        let subMenu = {
          id: m.permitSubMenuID,
          menuID: menu.id,
          subMenuName: m.subMenuName,
          showCrud: false,
          c: false,
          r: false,
          u: false,
          d: false,
          isActive: false,
          label: "",
          subMenuOrderSr: 0,
          formUrl: "",
          userID: 0
        };
        menu.idoxSubMenuList.push(subMenu);
      }
    });

    // remove menu from pemissions menue list if its menue list isActive equal false
    permission.subMenuPermissionList = permission.subMenuPermissionList.filter(x=>x.isActive==true);
    if(permission.subMenuPermissionList.length==0){
      this.permissions.menuPermissionList = this.permissions.menuPermissionList.filter(e => e.permitMenuID != permission.permitMenuID);
    }

    // remove menu from actual menue list if its menue list isActive equal true
    if (menu.idoxSubMenuList.length == 0) {
      this.unAssignedPermissions = this.unAssignedPermissions.filter(e => e.id != menu.id);
    }
  }

  async getMenuWithSubMenu() {
    let modal = { MenuID: 0 };
    let result = await this.settingsService.getMenuWithSubMenu(modal).toPromise();
    if (!result) return;
    this.unAssignedPermissions = result.outputObject;
  }

  /* #endregion */

  /* #region Update Assigned Permissions */

  updateUserRolePerminssions(menuId, subMenuId, crudOperationName, event) {
    let permission = this.permissions.menuPermissionList.find(e => e.permitMenuID == menuId).subMenuPermissionList
      .find(x => x.permitSubMenuID == subMenuId);
    if (permission) {
      if (permission.hasOwnProperty(crudOperationName)) {
        permission[crudOperationName] = event.target.checked;
        permission.isActive = true;
        let model = {
          ID: permission.permissionID,
          PermissionUserID: 0,
          PermitMenuID: menuId,
          PermitSubMenuID: subMenuId,
          C: permission.c,
          R: permission.r,
          U: permission.u,
          D: permission.d,
          IsUserPermission: false,
          IsActive: permission.isActive
        };
        this.permissionsTobeUpdate.push(model);
      }
    }
  }

  updateOrRemoveAssignSubMenu(menuId, subMenuId, event) {
    let permission = this.permissions.menuPermissionList.find(e => e.permitMenuID == menuId)
      .subMenuPermissionList.find(e => e.permitSubMenuID == subMenuId);
    if (event.target.checked) {
      permission.isActive = true;
      this.permissionsTobeUpdate = this.permissionsTobeUpdate.length > 0 ?
        this.permissionsTobeUpdate.filter(e => e.ID != permission.permissionID) : null;
    }
    else {
      permission.isActive = false;
      let model = {
        ID: permission.permissionID,
        PermissionUserID: 0,
        PermitMenuID: menuId,
        PermitSubMenuID: subMenuId,
        C: permission.c,
        R: permission.r,
        U: permission.u,
        D: permission.d,
        IsUserPermission: false,
        IsActive: permission.isActive
      };
      this.permissionsTobeUpdate.push(model);
    }
  }

  async updateAssignedPermissions() {
    let model: any = {};
    model.RoleID = this.userRoleID;
    model.UserID = this.userID === null ? localStorage.getItem('userID') : this.userID;
    model.UserPermissionList = this.permissionsTobeUpdate;

    if (this.permissionsTobeUpdate) {
      let result = await this.userService.updateUserPermissionPlusUserRole(model).toPromise();
      this.toasterService.success('Permissions updated successfully.');
      this.permissionsTobeUpdate.length = 0;
      let event: any = { value: this.userRoleID };
      this.getPermissions(event);
    }
  }

  /* #endregion */

  /* #region UN Assigned Permissions  */
  changeParent(menuId, event) {
    let menu = this.unAssignedPermissions.find(e => e.id == menuId);
    menu.isActive = event.target.checked;

    if (!event.target.checked) {
      menu.isActive = false;
      menu.idoxSubMenuList.forEach(x => x.isActive = false);
      this.permissionsTobeAssign = this.permissionsTobeAssign.filter(e => e.permitMenuID != menu.id);
    }
  }

  changeChild(menuId, subMenuId, event) {
    let menu = this.unAssignedPermissions.find(e => e.id == menuId);
    let subMenu = menu.idoxSubMenuList.find(e => e.id == subMenuId);

    if (!event.target.checked) {
      menu.isActive = false;
      subMenu.isActive = false;
      this.permissionsTobeAssign = this.permissionsTobeAssign.filter(e => e.permitSubMenuID != subMenuId);
    }
    else {
      menu.isActive = true;
      subMenu.isActive = true;
      let permissionID=0;
      let permissionMenu = this.tempPermissions.menuPermissionList.find(e => e.permitMenuID == menuId);
      if (permissionMenu) {
        permissionID = permissionMenu.subMenuPermissionList.find(e => e.permitSubMenuID == subMenuId).permissionID;
      }

      let permission:any = {};
      permission.id = permissionID ? permissionID : 0;
      permission.permitMenuID = menuId;
      permission.permitSubMenuID = subMenuId;
      permission.permissionUserID = 0;
      permission.isUserPermission = false;
      permission.c = false;
      permission.r = false;
      permission.u = false;
      permission.d = false;
      permission.isActive=true;
      this.permissionsTobeAssign.push(permission);
    }
  }

  assignOrUpdateCrudPermission(menuId, subMenuId, crudOperationName, event) {
    let permission = this.permissionsTobeAssign.length > 0 ?
      this.permissionsTobeAssign.find(e => e.permitMenuID == menuId && e.permitSubMenuID == subMenuId) : null;
    if (permission) {
      if (permission.hasOwnProperty(crudOperationName))
        permission[crudOperationName] = event.target.checked;
    }
  }

  async submitNewPermissions() {
    let model: any = {};
    model.RoleID = this.userRoleID;
    model.UserID = this.userID === null ? localStorage.getItem('userID') : this.userID;
    model.UserPermissionList = this.permissionsTobeAssign;

    if (this.permissions) {
      let result = await this.userService.updateUserPermissionPlusUserRole(model).toPromise();
      this.toasterService.success('Permissions added successfully.');
      this.permissionsTobeAssign.length=0;

      let event: any = { value: this.userRoleID };
      this.getPermissions(event);
    }
  }

  /* #endregion */

  removeAssignedPermission(menuId, event){
    debugger
    if (event.target.checked) {
      this.permissionsTobeRemove = this.permissionsTobeRemove.filter(e => e.ID !== menuId);
    }
    else {
      let modal: any = {
        ID: menuId,
        Event: "IsActive",
        Value: 0,
        UserID: localStorage.getItem('userID'),
        PermissionUserID: 0,
        RoleID: this.userRoleID
      };

      this.permissionsTobeRemove.push(modal);
    }
  }

  async removePermissions(){
    let model = { UsrRoleStatuseList: this.permissionsTobeRemove };

    let result = await this.userService.updatePermissionStatus(model).toPromise();
    this.toasterService.success('Permission remove successfully');
    this.permissionsTobeRemove.length=0;
    let event: any = { value: this.userRoleID };
    this.getPermissions(event);
  }
}
