import { Component, OnInit, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';
import { ActivatedRoute, Router } from '@angular/router';
import { timeStamp } from 'console';
import { Observable, Subscription } from 'rxjs';
import { StepModel } from 'src/app/Models/Experts Model/StepModel';
import { StepsService } from 'src/app/Services/Experts Services/steps.service';

@Component({
  selector: 'app-experts-user',
  templateUrl: './experts-user.component.html',
  styleUrls: ['./experts-user.component.css']
})
export class ExpertsUserComponent implements OnInit,OnDestroy {
  @Output() headerTitle = new EventEmitter<string>();
  currentStep: Observable<StepModel>;
  isUpdated: boolean = false;
  userSubscription: Subscription;

  constructor(private stepsService: StepsService,
    private router: Router, 
    private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    this.headerTitle.emit("Experts User");
    this.userSubscription = this.route.paramMap.subscribe(params => {
      if (params.get('id') != null && params.get('state') == 'completedprofile'){
        this.isUpdated = true;
        this.stepsService.getSteps().subscribe(e=>{
          e.map(x=>{x.isComplete=true});
        });
      }
      else
        this.isUpdated = false;
    });

    this.currentStep = this.stepsService.getCurrentStep();
  }
  
  ngOnDestroy():void{
    debugger
    this.stepsService.steps$.subscribe(x=>{
      x.map(e=>{
        e.isComplete=false;
      })
    })
    this.stepsService.currentStep$.next(this.stepsService.steps$.value[0]);
  }

  onNextStep() {
    if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep();
    } else {
      this.onSubmit();
    }
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Save & Continue' : 'Finish';
  }

  onSubmit(): void {
    this.router.navigate(['/complete']);
  }
}
