import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAlphabetsOnly]'
})
export class AlphabetsOnlyDirective {
  key;
  constructor(private ef:ElementRef) { }
  @HostListener('keydown', ['$event']) 
  onKeydown(event: KeyboardEvent) {
    debugger
    this.key = event.keyCode;
    if(event.keyCode==32){
      return;
    }
    if(event.key=='/'||event.key=='*'||event.key=='-'||event.key=='+'){
      event.preventDefault();
    }

    if (this.key == 32 || (this.key >= 48 && this.key <= 57) ||  (this.key >= 96 && this.key <= 123) ||(this.key>=186&& this.key<=225)) {
      event.preventDefault();
    }
  }
}
