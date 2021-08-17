import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng2-select2';
import { ToastrService } from 'ngx-toastr';
import { UserMenus } from 'src/app/Models/Menu/Menu';
import { UserRolePermissions, UserRolePlusPermissions } from 'src/app/Models/Users Model/UserRolesPlusPermission';
import { User } from 'src/app/Models/Users Model/UsersModel';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';
import { UserService } from 'src/app/Services/Users Services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  public user:User;
  public userCreationForm:FormGroup;
  public userCreationFormSubmit:boolean=false;
  public permissionsList: UserRolePermissions[] = [];
  public userMenus: UserMenus[] = [];
  public userRoles:Array<Select2OptionData>;
  public userTypes:Array<Select2OptionData>;
  public userRolePlusPermissions = new UserRolePlusPermissions();

  constructor(private userService:UserService,
    private settingsService:SettingsService,
    private fb:FormBuilder,
    private toasterSerivce:ToastrService) { }

  ngOnInit() {
    this.createUserCreationForm();
    this.getUserTypes();
    this.getUserRoles();
  }

  createUserCreationForm(){
    this.userCreationForm =this.fb.group({
      userTypeID:['',Validators.required],
      roleID:['',Validators.required],
      securityQuestionID:[0],
      securityQuestionAnswer:[''],
      userName:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      cellNo:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      homePhoneNo:[''],
      workPhoneNo:[''],
      faxNo:[''],
      status:[''],
      msg:[''],
      isIndividualPermission:['',Validators.required]
    },{validators:this.passwordMatchValidators});
  }

  passwordMatchValidators(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : { mismatch: true};
  }

  async getUserTypes(){
    let model={
      UserTypeID:0
    }
    let result = await this.userService.getUserType(model).toPromise();
    if(result.outputObject){
      result.outputObject.map(e=>e.text=e.userType);
      this.userTypes=[];
      this.userTypes = this.prepareDropDown(this.userTypes,result.outputObject)
    }
  }
  async getUserRoles(){
    let model={RoleID:0};
    let result = await this.userService.getUserRole(model).toPromise();
    if(result.outputObject){
      if(result.outputObject){
        result.outputObject.map(e=>e.text=e.roleName);
        this.userRoles=[];
        this.userRoles = this.prepareDropDown(this.userRoles,result.outputObject)
      }
    }
  }

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

  setOptionType(event, control){
    this.userCreationForm.get(control).setValue(event.value);
  }

  isIndividualPermission(event){
    this.userCreationForm.get('isIndividualPermission').setValue(event.target.value === 'false' ? false : true);
    if(event.target.value==='true'){
      this.userCreationForm.get('roleID').setValue('0');
      this.getMenuWithSubMenu();
    }
    else{
      this.userCreationForm.get('roleID').setValue('');
    }
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

  async submitUserForm(){
    this.userCreationFormSubmit=true;
    if(this.userCreationForm.valid){

      this.user = Object.assign({},this.userCreationForm.value);
      let response = await this.userService.CreateNewUser(this.user).toPromise();
      if(response.outputObject){
        let id = response.outputObject.pop().id;
        this.permissionsList.forEach(e => { e.permissionUserID = id });
        
        //prepare permissions
        this.userRolePlusPermissions.userID = +localStorage.getItem('userID');
        this.userRolePlusPermissions.userPermissionList = this.permissionsList;

        let result = await this.userService.createUserPermissionPlusUserRole(this.userRolePlusPermissions).toPromise();
        this.permissionsList.length=0;
        this.userMenus.length=0;
      }

      this.toasterSerivce.success('User successfully created.');
      this.ngOnInit();
      this.userCreationFormSubmit=false;
    }
  }
}
