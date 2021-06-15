import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-experts-rehabexpertclinics',
  templateUrl: './experts-rehabexpertclinics.component.html',
  styleUrls: ['./experts-rehabexpertclinics.component.css']
})
export class ExpertsRehabexpertclinicsComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.headerTitle.emit("Rehab Expert Clinics");
  }

}
