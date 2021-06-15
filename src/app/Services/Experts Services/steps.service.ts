import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StepModel } from 'src/app/Models/Experts Model/StepModel';


const STEPS = [
  { stepIndex: 1,stepName:"Personal Info", isComplete: false },
  { stepIndex: 2,stepName:"Contact Info", isComplete: false },
  { stepIndex: 3,stepName:"Fee / Charges ", isComplete: false },
  { stepIndex: 4,stepName:"Bank Detail", isComplete: false },
  { stepIndex: 5,stepName:"Upload Docs", isComplete: false }
];
@Injectable({
  providedIn: 'root'
})
export class StepsService {
  steps$: BehaviorSubject<StepModel[]> = new BehaviorSubject<StepModel[]>(STEPS);
  currentStep$: BehaviorSubject<StepModel> = new BehaviorSubject<StepModel>(null);

  constructor() {
    this.currentStep$.next(this.steps$.value[0]);
  }

  setCurrentStep(step: StepModel): void {
    this.currentStep$.next(step);
  }

  getCurrentStep(): Observable<StepModel> {
    return this.currentStep$.asObservable();
  }

  getSteps(): Observable<StepModel[]> {
    return this.steps$.asObservable();
  }

  moveToNextStep(): void {
    const index = this.currentStep$.value.stepIndex;

    if (index < this.steps$.value.length) {
      this.currentStep$.next(this.steps$.value[index]);
    }
  }

  isLastStep(): boolean {
    return this.currentStep$.value.stepIndex === this.steps$.value.length;
  }
}
