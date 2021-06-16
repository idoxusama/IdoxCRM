import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-experts-cbtexpert',
  templateUrl: './experts-cbtexpert.component.html',
  styleUrls: ['./experts-cbtexpert.component.css']
})
export class ExpertsCbtexpertComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.headerTitle.emit("CBT Experts");
  }
}
