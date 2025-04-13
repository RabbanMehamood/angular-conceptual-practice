import { Component, OnChanges } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-parent',
  imports: [FormsModule, ChildComponent, CommonModule, Child1Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent implements OnChanges {
  constructor() {
    console.log('Parent constructor got called, once.');
  }
  text: string = '';
  toggleCheck: boolean = false;

  onClick() {
    this.toggleCheck = !this.toggleCheck;
    console.log(this.toggleCheck);
    this.text = 'This is dynamic text Displayed using String Interpolation';
    console.log(this.text);
  }
  parentValue: string = 'Alex-ParentValue';
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.parentValue = inputElement.value;
  }
  // The ngOnChanges wont get called since it works only on input decorator porperties, if they get changed it gets logged. see in child1 component.ts to check if ngchanges works.
  ngOnChanges() {
    console.log('ngOnChange Hook got called');
  }
  ngOnInit() {
    console.log('ngOnInit Called only once, when variable gets changed');
  }
  ngDoCheck() {
    console.log(
      'ngDoCheck gets called on each event which happens in the whole document'
    );
  }
}
