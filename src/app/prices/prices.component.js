import { Component } from '@angular/core';

@Component({
  selector: 'contents',
  templateUrl: './prices.component.html'
})
export class PricesComponent {
  constructor() {
    this.products = [
      {name: 'Milk', description: '2% Reduced Fat', price: 3.57}
    ]
  }
}
