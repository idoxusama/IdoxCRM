import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Group } from 'src/app/Models/Users Model/group';
import { GroupService } from 'src/app/Services/Users Services/group.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  groupData: Array<Group>= new Array();
  isAdmin : boolean = false;
  showselectedGroup: boolean = false;
  CreateGroup : Group = new Group();
  selectedGroup : Group = new Group();

  constructor(private groupService: GroupService, private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("Group");
    this.CreateGroup.Status = "A";
    this.groupService.getGroupData().subscribe(data=>{
      this.groupData = data.outputObject;
    },
    error=>{
      console.log(error);
    });
  }

  selectedGroupDetail(group : any){
    this.selectedGroup = group;
    this.showselectedGroup = true;
  }

  selectedStatus(event){
    this.CreateGroup.Status = event;
  }

  selectedUpdateStatus(event){
    this.selectedGroup.Status = event;
  }

  createGroup(){

    this.groupService.CreateNewGroup(this.CreateGroup).subscribe((resp)=>{

      this.Toastr.success('Group Created Successfully ');
      this.ngOnInit();
      },
      (err)=>{
        console.log(err);
      });
  }

  EditGroup(){

    this.groupService.UpdateGroup(this.selectedGroup).subscribe(resp=>{
      this.Toastr.success('Group Updated Successfully ');
      this.ngOnInit();
      $("#editGroupModal").modal("hide");
      console.log(resp);
    },err=>{
      console.log(err);
    });

  }

  DeleteGroup(GroupID:any){

    this.groupService.DeleteGroup(GroupID).subscribe(resp=>{
      this.Toastr.success('Group Updated Successfully ');
      this.ngOnInit();
      $("#editGroupModal").modal("hide");
      console.log(resp);
    },err=>{
      console.log(err);
    });

  }

}
