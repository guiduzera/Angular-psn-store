import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() gameCover: string = 'assets/bt-5.jpg';
  @Input() gameLabel: string = 'Exclusive';
  @Input() gamePricing: string = '$ 59.99';
  @Input() gameType: string = 'PS5';
}
