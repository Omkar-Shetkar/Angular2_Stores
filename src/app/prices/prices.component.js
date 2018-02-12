import {
  Component
} from '@angular/core';

@Component({
  selector: 'contents',
  templateUrl: './prices.component.html'
})
export class PricesComponent {
  constructor() {
    this.reversed = false;
    this.products = [{
        name: 'Milk',
        description: '2% Reduced Fat',
        price: 5.57
      },
      {
        name: 'Orange Juice',
        description: '1 gallon fresh',
        price: 5.45
      },
      {
        name: 'Apple Juice',
        description: '1 gallon delightful',
        price: 2.99
      }
    ];

    setTimeout(() => this.changeProducts(), 3000);

  }

  changeProducts() {
    const count = this.products.length + 1;
    const newProduct = {
      name: `item${count}`,
      description: `description${count}`,
      price: 1.99
    };
    this.products.push(newProduct);

  }
}
