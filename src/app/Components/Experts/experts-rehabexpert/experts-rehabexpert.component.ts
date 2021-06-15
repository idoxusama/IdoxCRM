import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-experts-rehabexpert',
  templateUrl: './experts-rehabexpert.component.html',
  styleUrls: ['./experts-rehabexpert.component.css']
})
export class ExpertsRehabexpertComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.headerTitle.emit("Rehab Experts");
  }

}
