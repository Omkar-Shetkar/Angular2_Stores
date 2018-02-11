import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { PricesComponent } from './prices/prices.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [ PricesComponent ],
  providers: [],
  bootstrap: [ PricesComponent ]
})
export class AppModule {}
