import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  onSubscribe(value: string) {
    let subService = new SubscribeService();
    subService.OnSubscribe(value);
  }
}
