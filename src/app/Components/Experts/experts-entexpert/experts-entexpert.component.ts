import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-experts-entexpert',
  templateUrl: './experts-entexpert.component.html',
  styleUrls: ['./experts-entexpert.component.css']
})
export class ExpertsEntexpertComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.headerTitle.emit("ENT Experts");
  }
}
