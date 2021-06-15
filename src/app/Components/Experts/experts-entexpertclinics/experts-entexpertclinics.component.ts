import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-experts-entexpertclinics',
  templateUrl: './experts-entexpertclinics.component.html',
  styleUrls: ['./experts-entexpertclinics.component.css']
})
export class ExpertsEntexpertclinicsComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.headerTitle.emit("ENT Expert Clinics");
  }

}
