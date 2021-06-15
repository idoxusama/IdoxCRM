import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { debug } from 'console';
import { UserActivityService } from './Services/Users Services/user-activity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Idox Booking';
  startTime:any;
  endTime:any;

  constructor(private userActivity:UserActivityService,private router:Router){}

  @HostListener('window:load', [ '$event' ])
  loadHandler(event) {
    this.startTime= new Date();
  }

  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHandler(event) {
    this.endTime = new Date();
    let url = this.router.url;
    this.userActivity.trackUserSpentTimeOnComponent(this.startTime,this.endTime,url);
  }
}
