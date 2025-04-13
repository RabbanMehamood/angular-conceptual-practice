import { Component, ContentChild, ElementRef, OnChanges } from '@angular/core';
import { SetBackground } from '../../CustomDirectives/SetBackground.directive';
import { AppHoverDirective } from '../../CustomDirectives/app-hover.directive';

@Component({
  standalone: true,
  selector: 'app-child1',
  imports: [SetBackground, AppHoverDirective],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
})
export class Child1Component {
  constructor() {
    console.log(
      'child1 component constructor got called, and instaintiated only once, since only this selector is used only once in the parent component Html template'
    );
  }
  @ContentChild('childOne') paragraphEl: ElementRef;

  onClickCheckRef() {
    console.log(this.paragraphEl);
    console.log(this.paragraphEl.nativeElement.innerText);
  }
}
