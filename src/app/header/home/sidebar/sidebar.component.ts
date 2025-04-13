import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  onSubscribe(duration: string) {
    let subService = new SubscribeService();
    subService.OnSubscribe(duration);
  }
}
