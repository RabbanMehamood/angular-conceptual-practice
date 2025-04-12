import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
// Using ElementRef we directly access the dom element and modify it, while the Renderer2 it create an abstraction of the element and modify it for security reasons.
export class SetBackground implements OnInit {
  // private element: ElementRef;
  // private renderer: Renderer2;
  constructor(private element: ElementRef, private renderer: Renderer2) {
    // this.element = element;
    // this.renderer = renderer;
  }
  // ngOnInit(): void {
  //   this.element.nativeElement.style.backgroundColor = 'yellow';
  //   this.element.nativeElement.style.color = 'black';
  //   this.element.nativeElement.style.padding = '15px';
  // }

  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'yellow'
    );
    this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '15px');
    // can set an attribute
    this.renderer.setAttribute(
      this.element.nativeElement,
      'title',
      'Styled Using Custom Directive'
    );
  }
}
8500485184;
