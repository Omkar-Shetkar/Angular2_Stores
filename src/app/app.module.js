import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { PricesComponent } from './prices/prices.component';
import { SortByNamePipe } from './prices/sortbyname.pipe'
import { SortByPricePipe } from './prices/sortbyprice.pipe'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [ PricesComponent, SortByNamePipe, SortByPricePipe ],
  providers: [],
  bootstrap: [ PricesComponent ]
})
export class AppModule {}
