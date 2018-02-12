import {
  Pipe
} from '@angular/core';

@Pipe({
  name: 'sortbyname'
})
export class SortByNamePipe {
  transform(products, isReverseOrder = false) {
    let factor = isReverseOrder ? -1 : 1;
    let byName = (product1, product2) => {
      return product1.name.localeCompare(product2.name) * factor;
    };

    return products.slice().sort(byName);
  }
}
