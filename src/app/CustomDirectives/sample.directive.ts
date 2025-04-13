import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSample]',
})
export class SampleDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() set renderParagraph(value) {}
}
