import { Component, OnInit } from '@angular/core';
import { debug } from 'console';
import { Select2OptionData } from 'ng2-select2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MenuSettings, SaveMenuSettings, SaveSubMenuSettingList } from 'src/app/Models/Users Model/MenusSettings';
import { Select2DropdownService } from 'src/app/Services/select2-dropdown.service';
import { SettingsService } from 'src/app/Services/Settings Services/settings.service';
import { UserService } from 'src/app/Services/Users Services/user.service';

@Component({
  selector: 'app-menu-settings',
  templateUrl: './menu-settings.component.html',
  styleUrls: ['./menu-settings.component.css']
})
export class MenuSettingsComponent implements OnInit {
  public userRoleId: number;
  public userID: number;
  public roles: Array<Select2OptionData>;
  public users: Array<Select2OptionData>;

  public menuBy: string;
  public menuSettings: MenuSettings[] = [];

  public menuId: string;
  public subMenuId: string;

  public changeSubMenuModel: any = {};
  public changeMenuModal: any = {};

  public modalRef: BsModalRef;

  //user to move child of parent to another parent child
  public removeIndex: number;
  public addedIndex: number;
  public itemTobeAdded: any = {};

  public menuSettingsSave: SaveMenuSettings[] = [];
  public subMenuSettingsSave: SaveSubMenuSettingList[] = [];

  constructor(private dropdownService: Select2DropdownService,
    private userService: UserService,
    private settingsService: SettingsService,
    private modalService: BsModalService,
    private toasterService: ToastrService) {
    this.getChildPayload = this.getChildPayload.bind(this);
  }

  ngOnInit() {
  }

  /* #region  Prepare menu settings Board */

  showDropDown(event) {
    this.menuBy = event.target.value;
    if (this.menuBy == 'ByUser') {
      this.getUsers();
    }
    else if (this.menuBy == 'ByRole') {
      this.getUserRoles();
    }
  }


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

  selectDropdownItem(event) {
    if (event.value == '') return;

    if (this.menuBy == 'ByUser') {
      this.getMenuSettings(event.value, 0);
    }

    if (this.menuBy == 'ByRole') {
      this.getMenuSettings(0, event.value);
    }
  }

  async getMenuSettings(userID, roleID) {
    this.userID = userID;
    this.userRoleId = roleID;

    let modal = {
      MenuSettingID: 0,
      UserID: userID,
      RoleID: roleID,
      UserTypeID: 0,
      IsUserTypeMenu: false,
      IsGeneralMenu: false
    };

    let result = await this.settingsService.getMenuSubMenuSettings(modal).toPromise();
    this.menuSettings = result.outputObject;

    if (this.menuSettings) {
      this.menuSettings.map(e => {
        e.isMenuSettingChange = true;
        e.subMenuSettingList.map(e => e.isSubMenuSettingsChange = true);
      });
    }
  }
  /* #endregion */

  /* #region  Drag and Drop */
  onMenuDrop(dropResult) {
    this.menuSettings = this.applyDrag(this.menuSettings, dropResult);
    let removedMenuOrder = this.menuSettings[dropResult.removedIndex].menuOrderSr;
    let addedMenuOrder = this.menuSettings[dropResult.addedIndex].menuOrderSr;
    this.menuSettings[dropResult.removedIndex].menuOrderSr = addedMenuOrder;
    this.menuSettings[dropResult.addedIndex].menuOrderSr = removedMenuOrder;
  }

  dragEnter(menuId) {
    if(this.menuId !=null){
      // do nothing
    }
    else{
      this.menuId = menuId;
    }
  }

  getChildPayload(index) {
    this.removeIndex = index;
  }

  onSubMenuDrop(dropResult, menuId) {
    debugger
    if(dropResult.removedIndex==null && dropResult.addedIndex>=0 &&  this.menuId!=menuId){
      let menu = this.menuSettings.find(e => e.menuSettingID == +this.menuId);
      if(this.removeIndex>=0){
        this.itemTobeAdded = menu.subMenuSettingList.splice(this.removeIndex, 1)[0];
      }
    }

    if (dropResult.removedIndex != null && dropResult.addedIndex == null) {
      let menu = this.menuSettings.find(e => e.menuSettingID == menuId);
      this.itemTobeAdded = menu.subMenuSettingList.splice(dropResult.removedIndex, 1)[0];
    }

    else if (dropResult.addedIndex != null && dropResult.removedIndex == null) {
      let menu = this.menuSettings.find(e => e.menuSettingID == menuId);
      if (!!Object.keys(this.itemTobeAdded).length) {
        menu.subMenuSettingList.unshift(this.itemTobeAdded);
        this.itemTobeAdded={};
      }
    }

    if (typeof (dropResult.addedIndex) === "number" && typeof (dropResult.removedIndex) === "number") {
      let menu = this.menuSettings.find(e => e.menuSettingID == menuId);
      menu.subMenuSettingList = this.applyDrag(menu.subMenuSettingList, dropResult);
      let removedSubmenuOrder = menu.subMenuSettingList[dropResult.removedIndex].subMenuOrderSr;
      let addedSubmenuOrder = menu.subMenuSettingList[dropResult.addedIndex].subMenuOrderSr;
      menu.subMenuSettingList[dropResult.removedIndex].subMenuOrderSr = addedSubmenuOrder;
      menu.subMenuSettingList[dropResult.addedIndex].subMenuOrderSr = removedSubmenuOrder;
    }
  }

  applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;

    const result = arr;
    let itemToAdd = payload;

    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0];
    }

    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd);
    }

    return result;
  };
  /* #endregion */

  /* #region  Menu Settings */

  openMenuSettingModal(template, menuId) {
    this.menuId = menuId;
    let menu = this.menuSettings.find(e => e.menuSettingID == menuId);
    this.changeMenuModal.menuName = menu.menuName;

    this.modalRef = this.modalService.show(template);
  }

  saveMenuSettings() {
    let menu = this.menuSettings.find(e => e.menuSettingID == +this.menuId);
    menu.menuSettingName = this.changeMenuModal.menuName;
    menu.isMenuSettingChange = true;
    this.modalRef.hide();
  }

  setMenuDefaultSettings(menuId) {
    let menu = this.menuSettings.find(e => e.menuSettingID == menuId);
    menu.isMenuSettingChange = false;
  }

  /* #endregion */

  /* #region  Sub menu settings */

  openChangeSubMenuSettings(template, menuId, subMenuId) {
    this.menuId = menuId;
    this.subMenuId = subMenuId;

    let menu = this.menuSettings.find(e => e.menuSettingID == menuId);
    let subMenu = menu.subMenuSettingList.find(e => e.subMenuSettingID == subMenuId);

    if (subMenu.isSubMenuSettingsChange) {
      this.changeSubMenuModel.menuName = subMenu.subMenuSettingName;
      this.changeSubMenuModel.formUrl = subMenu.subMenuSettingFormUrl;
    }
    else {
      this.changeSubMenuModel.menuName = subMenu.subMenuName;
      this.changeSubMenuModel.formUrl = subMenu.formUrl;
    }

    this.modalRef = this.modalService.show(template);
  }

  saveSubMenuSettings() {
    let menu = this.menuSettings.find(e => e.menuSettingID == +this.menuId);
    let submenu = menu.subMenuSettingList.find(e => e.subMenuSettingID == +this.subMenuId);
    submenu.subMenuSettingName = this.changeSubMenuModel.menuName;
    submenu.subMenuSettingFormUrl = this.changeSubMenuModel.formUrl;
    submenu.isSubMenuSettingsChange = true;
    this.modalRef.hide();
  }

  setSubMenuDefaultSettings(menuId, subMenuId) {
    let menu = this.menuSettings.find(e => e.menuSettingID == menuId);
    let submenu = menu.subMenuSettingList.find(e => e.subMenuSettingID == subMenuId);
    submenu.isSubMenuSettingsChange = false;
  }
  /* #endregion */

  /* #region  Save Menu Settings */
  async saveSettings() {
    this.menuSettings.forEach(x => {
      let menuSetting: SaveMenuSettings = {
        ID: x.menuSettingID,
        MenuID: x.menuID,
        MenuUserID: this.userID,
        RoleID: this.userRoleId,
        IsGeneralMenu: true,
        UserTypeID: 0,
        IsUserTypeMenu: true,
        MenuName: x.isMenuSettingChange ? x.menuSettingName : x.menuName,
        MenuLabel: x.menuLabel,
        MenuOrderSr: x.menuOrderSr,
        UserID: +localStorage.getItem('userID'),
        subMenuSettingList: []
      };
      x.subMenuSettingList.forEach(e => {
        let object: SaveSubMenuSettingList = {
          ID: e.subMenuSettingID,
          SubMenuID: e.subMenuID,
          SubMenuName: e.isSubMenuSettingsChange ? e.subMenuSettingName : e.subMenuName,
          SubMenuLabel: e.subMenuLable,
          SubMenuOrderSr: e.subMenuOrderSr,
          FormUrl: e.isSubMenuSettingsChange?e.subMenuSettingFormUrl:e.formUrl
        };
        menuSetting.subMenuSettingList.push(object);
      });
      this.menuSettingsSave.push(menuSetting);
    });

    let model = {
      MenuSettinglist: this.menuSettingsSave
    };
    await this.settingsService.updateMenuSetting(model).toPromise();
    this.toasterService.success("Menu settings updated successfully");
    this.menuSettingsSave.length = 0;
    this.getMenuSettings(this.userID,this.userRoleId);
  }
  /* #endregion */
}

