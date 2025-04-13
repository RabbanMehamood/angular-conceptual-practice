export class SubscribeService {
  OnSubscribe(value: string) {
    alert(
      'Thank you for ' +
        value +
        ' subscribtion, you have now access to premium content.'
    );
  }
}
