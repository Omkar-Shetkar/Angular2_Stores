import { Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

export class PricesService {
  constructor(@Inject(Http) http) {
    this.http = http;
  }

  prices() {
    return this.http.get('http://localhost:8080/prices')
      .map(response => this.extractData(response))
      .catch(error => Observable.throw(error.message));
  }

  extractData(response) {
    if(response.status === 200)
      return response.json();
    else
      throw new Error('invalid response');
  }

}
