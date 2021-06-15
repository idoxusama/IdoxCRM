import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StepModel } from 'src/app/Models/Experts Model/StepModel';
import { StepsService } from 'src/app/Services/Experts Services/steps.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  
  steps: Observable<StepModel[]>;
  currentStep: Observable<StepModel>;

  constructor(private stepsService:StepsService) { }

  ngOnInit() {
    this.steps = this.stepsService.getSteps();
    this.currentStep = this.stepsService.getCurrentStep();
  }

  onStepClick(step: StepModel) {
    debugger
    this.stepsService.setCurrentStep(step);
  }
}
