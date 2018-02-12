import { Component } from '@angular/core';

@Component({
  selector: 'contents',
  templateUrl: './prices.component.html'
})
export class PricesComponent {
  constructor() {
    this.message = '...';
    this.products = [
      {name: 'Milk', description: '2% Reduced Fat', price: 3.57}
    ];

    setTimeout(
      () =>
        this.products[0].description = this.products[0].description.toUpperCase()
      , 5000);
  }
}
