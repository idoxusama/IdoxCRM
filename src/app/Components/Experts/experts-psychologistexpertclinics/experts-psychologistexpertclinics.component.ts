import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-experts-psychologistexpertclinics',
  templateUrl: './experts-psychologistexpertclinics.component.html',
  styleUrls: ['./experts-psychologistexpertclinics.component.css']
})
export class ExpertsPsychologistexpertclinicsComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.headerTitle.emit("Psychologist Expert Clinics");
  }

}
