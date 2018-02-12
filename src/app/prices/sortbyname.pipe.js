import {
  Pipe
} from '@angular/core';

@Pipe({
  name: 'sortbyname'
})
export class SortByNamePipe {
  transform(products) {
    let byName = (product1, product2) => {
      var result = product1.name.localeCompare(product2.name);
      if (result === 0)
        return product1.price > product2.price;
      return result;
    };

    return products.slice().sort(byName);
  }
}
