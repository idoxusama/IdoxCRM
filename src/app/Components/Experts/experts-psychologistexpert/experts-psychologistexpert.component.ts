import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-experts-psychologistexpert',
  templateUrl: './experts-psychologistexpert.component.html',
  styleUrls: ['./experts-psychologistexpert.component.css']
})
export class ExpertsPsychologistexpertComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.headerTitle.emit("Psychologist Experts");
  }
}
