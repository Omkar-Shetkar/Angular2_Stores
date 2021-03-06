import { Component, Inject } from '@angular/core';
import { PricesService } from './prices.service';

@Component({
  selector: 'contents',
  templateUrl: './prices.component.html',
  providers: [ PricesService ]
})
export class PricesComponent {
  constructor(@Inject(PricesService) service) {
    this.service = service;
    this.message = '';
    this.products = [];

    this.selectedItem = 'Water';
    this.items = ['Coffee', 'Tea', 'Water'];
  }


  ngOnInit() {
    // this.service.prices()
    //     .subscribe(data => this.updateData(data),
    //               error => this.updateError(error));

    this.service.prices()
        .then(data => this.updateData(data))
        .catch(error => this.updateError(error));
  }

  updateData(data) {
    this.products = data;
  }

  updateError(error) {
    this.message = error;
  }

}
