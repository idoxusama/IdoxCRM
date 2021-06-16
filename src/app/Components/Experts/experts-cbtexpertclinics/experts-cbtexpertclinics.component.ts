import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-experts-cbtexpertclinics',
  templateUrl: './experts-cbtexpertclinics.component.html',
  styleUrls: ['./experts-cbtexpertclinics.component.css']
})
export class ExpertsCbtexpertclinicsComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.headerTitle.emit("CBT Expert Clinics");
  }


}
