import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-experts-orthopaedicexpert',
  templateUrl: './experts-orthopaedicexpert.component.html',
  styleUrls: ['./experts-orthopaedicexpert.component.css']
})
export class ExpertsOrthopaedicexpertComponent implements OnInit {

  @Output() headerTitle = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.headerTitle.emit("Orthopaedic Experts");
  }
}
