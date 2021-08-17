import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserMenus } from 'src/app/Models/Menu/Menu';
import { UserRolePermissions, UserRolePlusPermissions } from 'src/app/Models/Users Model/UserRolesPlusPermission';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';
import { UserService } from 'src/app/Services/Users Services/user.service';

@Component({
  selector: 'app-create-user-role',
  templateUrl: './create-user-role.component.html',
  styleUrls: ['./create-user-role.component.scss']
})
export class CreateUserRoleComponent implements OnInit {
  public userRole: UserRolePlusPermissions;
  public permissionsList: UserRolePermissions[] = [];
  public userMenus: UserMenus[] = [];
  public userRoleForm: FormGroup;
  public userRoleFormSubmit: boolean = false;
  constructor(private userService: UserService,
    private settingsService: SettingsService,
    private fb: FormBuilder,
    private toasterService: ToastrService) { }

  ngOnInit() {
    this.createUserRoleForm();
  }

  createUserRoleForm() {
    this.userRoleForm = this.fb.group({
      roleName: ['', Validators.required]
    });
  }

  async getMenuWithSubMenu() {
    let modal = { MenuID: 0 };
    let result = await this.settingsService.getMenuWithSubMenu(modal).toPromise();
    if (!result) return;
    this.userMenus = result.outputObject;
  }

  showSubmenu(id) {
    let menu = this.userMenus.find(e => e.id == id);
    menu.showSubMenu = true;
  }

  showSubMenuCrud(meunId, subMenuId) {
    let subMenu = this.userMenus.find(e => e.id == meunId).idoxSubMenuList.find(e => e.id == subMenuId);
    subMenu.showCrud = true;

    let permission = new UserRolePermissions();
    permission.permitMenuID = meunId;
    permission.permitSubMenuID = subMenuId;
    permission.permissionUserID = 0;
    permission.isUserPermission = false;
    this.permissionsList.push(permission);
  }

  addUserRolePerminssions(menuId, subMenuId, crudOperationName, event) {
    let permission = this.permissionsList.length > 0 ?
      this.permissionsList.find(e => e.permitMenuID == menuId && e.permitSubMenuID == subMenuId) : null;
    if (permission) {
      if (permission.hasOwnProperty(crudOperationName))
        permission[crudOperationName] = event.target.checked;
    }
    else {
      permission = new UserRolePermissions();
      permission.permitMenuID = menuId;
      permission.permitSubMenuID = subMenuId;
      permission.c = crudOperationName == 'c' ? event.target.checked : false;
      permission.r = crudOperationName == 'r' ? event.target.checked : false;
      permission.u = crudOperationName == 'u' ? event.target.checked : false;
      permission.d = crudOperationName == 'd' ? event.target.checked : false;
      permission.permissionUserID = 0;
      permission.isUserPermission = false;
      this.permissionsList.push(permission);
    }
  }

  async submitUserRole() {
    this.userRoleFormSubmit = true;
    if (this.userRoleForm.valid) {
      this.userRole = Object.assign({}, this.userRoleForm.value);
      this.userRole.userID = +localStorage.getItem('userID');
      this.userRole.userPermissionList = this.permissionsList;
      if (this.permissionsList.length > 0) {
        let response = await this.userService.createUserPermissionPlusUserRole(this.userRole).toPromise();

        this.toasterService.success('User role successfully created');
        this.userRoleFormSubmit = false;
        this.permissionsList.length=0;
        this.userMenus.length=0;
      }
      else {
        this.toasterService.warning("Please gives permissions to this role");
      }

    }
  }
}
