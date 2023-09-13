import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent {
  @Input() gamePricing: string = '$ 59.99';
  @Input() gameType: string = 'PS5';
}
