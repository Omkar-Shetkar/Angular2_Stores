import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

export { HttpModule } from '@angular/http';
export { Http } from '@angular/http'
export { ReflectiveInjector } from '@angular/core';
export { PricesService } from './app/prices/prices.service';
