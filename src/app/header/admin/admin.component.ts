import { Component } from '@angular/core';
import { SubscribeService } from '../../Services/subscribe.service';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  onSubscribe() {
    let subService = new SubscribeService();
    subService.OnSubscribe('monthly');
  }
}
