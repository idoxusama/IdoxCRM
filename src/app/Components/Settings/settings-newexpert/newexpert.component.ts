import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NewExpertModel } from 'src/app/Models/Settings Model/NewExpertModel';
import { NewExpertService } from 'src/app/Services/Settings Services/new-expert.service';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';

declare var $: any;
@Component({
  selector: 'app-newexpert',
  templateUrl: './newexpert.component.html',
  styleUrls: ['./newexpert.component.css']
})
export class NewexpertComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();
  NewExpertTypeData: Array<NewExpertModel>= new Array();
  constructor(private newexpertservice: NewExpertService,private router: Router,public datepipe: DatePipe,private Toastr: ToastrService) { }

  ngOnInit() {
    this.headerTitle.emit("New Expert");
    this.newexpertservice.getAllExpertsTypesData().subscribe(data=>{
      if(data.outputObject !== null)
      {
        this.NewExpertTypeData = data.outputObject;
      }
      else {
        this.NewExpertTypeData = [];
      }
      
      },
      error=>{ 
        console.log(error);
      });
  }

}
