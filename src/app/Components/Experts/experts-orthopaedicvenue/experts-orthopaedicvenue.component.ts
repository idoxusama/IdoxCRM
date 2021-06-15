import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-experts-orthopaedicvenue',
  templateUrl: './experts-orthopaedicvenue.component.html',
  styleUrls: ['./experts-orthopaedicvenue.component.css']
})
export class ExpertsOrthopaedicvenueComponent implements OnInit {
  @Output() headerTitle = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.headerTitle.emit("Expert Orthopaedic Venue");
  }


}
