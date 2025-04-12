import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAppHover]',
})
export class AppHoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.background')
  backgroundColor: string = 'black';
  @HostBinding('style.color')
  fontcolor: string = 'white';
  @HostBinding('style.borderRadius')
  borderradius: string = '7px';

  @HostListener('mouseenter') onMouseHover() {
    this.backgroundColor = 'skyblue';
    this.fontcolor = 'black';
    this.borderradius = '9px';
  }
  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = 'black';
    this.fontcolor = 'white';
    this.borderradius = '7pxd';
  }
}
