import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  OnMouseEnter() {
    this.renderer.addClass(this.element.nativeElement, 'zoom-in-style');
  }

  @HostListener('mouseout')
  OnMouseOut() {
    this.renderer.removeClass(this.element.nativeElement, 'zoom-in-style');
  }
}
