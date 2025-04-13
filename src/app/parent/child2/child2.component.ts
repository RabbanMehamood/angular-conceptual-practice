import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
})
export class Child2Component {
  inputValue: boolean = false;
  onGetInputValue(inputValue: boolean): boolean {
    return (this.inputValue = !this.inputValue);
  }
}
