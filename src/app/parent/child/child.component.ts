import { Component, Input, OnChanges } from '@angular/core';
import { HighlightDirective } from '../../CustomDirectives/highlight.directive';

@Component({
  standalone: true,
  selector: 'app-child',
  imports: [HighlightDirective],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnChanges {
  constructor() {
    console.log('child component called');
  }
  @Input() parentPropertyValue: string = '';
  ngOnChanges() {
    console.log(
      'NG-ONCHANGE>The input decorator property inside the child component got changed so , this message is logged.'
    );
  }
}
