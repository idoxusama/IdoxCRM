import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng2-select2';
import { UserService } from 'src/app/Services/Users Services/user.service';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';
import { UserMenus } from 'src/app/Models/Menu/Menu';
import { UserRolePermissions, UserRolePlusPermissions } from 'src/app/Models/Users Model/UserRolesPlusPermission';

@Component({
  selector: 'app-permission-board',
  templateUrl: './permission-board.component.html',
  styleUrls: ['./permission-board.component.css']
})
export class PermissionBoardComponent implements OnInit {
  public userRole: UserRolePlusPermissions;
  public userRoleForm: FormGroup;
  public userRoles: Array<Select2OptionData>;
  public userMenus: UserMenus[] = [];
  public userPermissionRole: UserRolePlusPermissions[] = [];
  public permissionsList: UserRolePermissions[] = [];
  public chk: boolean = false;
  constructor(private userService: UserService,
    private settingsService: SettingsService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createUserRoleForm();
  }

  createUserRoleForm() {
    this.userRoleForm = this.fb.group({
      permitMenuID: ['', Validators.required],
      permitSubMenuID: ['', Validators.required],
      roleID: ['', Validators.required],
      roleName: ['', Validators.required],
      chkRoleName: ['', Validators.required]
    });
  }
  // async getMenuWithSubMenu() {
  //   let modal = { MenuID: 0 };
  //   let result = await this.settingsService.getUserRolePermission(modal).toPromise();
  //   if (!result) return;
  //   this.userMenus = result.outputObject;
  //   console.log(this.userMenus);
  //   let abcd = this.permissionsList.find(x => x.permitMenuID);
  //   // this.permissionsList.push(this.userPermissionRole.filter());
  //   this.userMenus = result.outputObject.filter(f => !this.userPermissionRole.find(x=>x.userPermissionList));
  //   console.log(this.userMenus);
  // }
  // showSubmenu(id) {
  //   // let menu = this.userPermissionRole.userPermissionList.find(e => e.permitMenuID == id);
  //   // menu.showSubMenu = true;
  // }

  // showSubMenuCrud(meunId, subMenuId) {
  //   //let subMenu = this.userPermissionRole.userPermissionList.find(e => e.permitMenuID == meunId) && (e => e.permitSubMenuID == subMenuId);
  //   //subMenu.showCrud = true;

  //   let permission = new UserRolePermissions();
  //   permission.permitMenuID = meunId;
  //   permission.permitSubMenuID = subMenuId;
  //   permission.permissionUserID = 0;
  //   permission.isUserPermission = false;
  //   this.permissionsList.push(permission);
  // }

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

  //#region Method
  async getUserRoles() {
    let model = { RoleID: 0 };
    let result = await this.userService.getUserRole(model).toPromise();
    if (result.outputObject) {
      if (result.outputObject) {
        result.outputObject.map(e => e.text = e.roleName);
        this.userRoles = [];
        this.userRoles = this.prepareDropDown(this.userRoles, result.outputObject)
      }
    }
  }
  setOptionType(event, control) {
    this.userRoleForm.get(control).setValue(event.value);
    this.getRolePermission();
  }
  async getRolePermission() {

    let modal = { RoleID: this.userRoleForm.get('roleID').value, UserPermissionID: 0, UserID: 0 };
    //let result = await this.settingsService.getUserRolePermission(modal).toPromise();

    // if (!result) return;
    // this.userPermissionRole = result.outputObject;
    //this.permissionsList = result.outputObject;
    result => {
      this.permissionsList = result.data.map(p => ({
        permitMenuID: p.permitMenuID,
        permitSubMenuID: p.permitSubMenuID
      }));
    }
    console.log(this.userPermissionRole);
    console.log(this.permissionsList);
    //this.getMenuWithSubMenu();
  }

  //#endregion Event
  chkRoleName() {
    this.chk = (this.chk === false ? true : false)
    this.userRoleForm.get('chkRoleName').setValue(this.chk);

    if (this.chk === true) {
      this.userRoleForm.get('roleID').setValue('0');
      this.getUserRoles();
    }
    else {
      this.userRoleForm.get('roleID').setValue('');
      this.getUserRoles();
    }
  }

  submitUserRole() {

  };
  //#endregion Event

  //#endregion Method

  //#region  select2
  prepareDropDown(optionsArray: Array<Select2OptionData>, data?: any[], selectedValue?) {
    if (data) {
      let defualtOption = {
        id: '',
        text: 'Select Option'
      };
      optionsArray.push(defualtOption);
      data.forEach(element => {
        let object = {
          id: element.id,
          text: element.text
        };
        optionsArray.push(object);
      });
    }

    if (selectedValue) {
      let options = optionsArray;
      optionsArray.forEach(function (item, i) {
        if (item.id == selectedValue) {
          options.splice(i, 1);
          options.unshift(item);
        }
      });
      optionsArray = options;
    }
    return optionsArray;
  }
  //#endregion select2
}
