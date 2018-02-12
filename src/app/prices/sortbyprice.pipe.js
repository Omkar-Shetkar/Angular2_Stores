import { Pipe } from '@angular/core';

@Pipe({
  name: 'sortbyprice'
})
export class SortByPricePipe {
    transform(products) {
      let byPrice = (product1, product2) => product1.price > product2.price;
      return products.slice().sort(byPrice);
    }
}
