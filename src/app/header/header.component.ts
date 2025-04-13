import { Component } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-header',
  imports: [AdminComponent, HomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  selectedTab: string = 'admin';
}
