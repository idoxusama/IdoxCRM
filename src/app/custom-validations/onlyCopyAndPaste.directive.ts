import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyCopyAndPaste]'
})
export class OnlyCopyAndPasteDirective {
  constructor(private el: ElementRef) { }
  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (
      (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
      (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
      (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
      (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
      (e.key === 'z' && e.ctrlKey === true) || // Allow: Ctrl+Z
      (e.key === 'a' && e.metaKey === true) || // Cmd+A (Mac)
      (e.key === 'c' && e.metaKey === true) || // Cmd+C (Mac)
      (e.key === 'v' && e.metaKey === true) || // Cmd+V (Mac)
      (e.key === 'x' && e.metaKey === true) || // Cmd+X (Mac)
      (e.key === 'z' && e.ctrlKey === true)   // Cmd+X (Mac)
    ) {
      return;
    }
    else {
      return e.preventDefault();
    }
  }
}
