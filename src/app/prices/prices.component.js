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
      () => {
        this.message = 'changed';
        this.products = [
          {name: 'Milk', description: '2% Reduced Fat', price: 3.57},
          {name: 'Milk', description: '2% Reduced Fat, Skimmed', price: 4.57}
        ];
      }
      , 5000);
  }
}
