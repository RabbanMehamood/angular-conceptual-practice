import { Component } from '@angular/core';

import { ParentComponent } from './parent/parent.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-test-project';

  constructor() {
    console.log('App Component constructor called');
  }
}
