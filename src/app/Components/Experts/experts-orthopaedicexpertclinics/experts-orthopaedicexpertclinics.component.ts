import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-experts-orthopaedicexpertclinics',
  templateUrl: './experts-orthopaedicexpertclinics.component.html',
  styleUrls: ['./experts-orthopaedicexpertclinics.component.css']
})
export class ExpertsOrthopaedicexpertclinicsComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.headerTitle.emit("Orthopaedic Expert Clinics");
  }

}
