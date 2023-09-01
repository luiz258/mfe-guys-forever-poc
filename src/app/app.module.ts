import {
  CUSTOM_ELEMENTS_SCHEMA,
  DoBootstrap,
  Injector,
  NgModule,
  inject
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

import { DataStoreModule, GalleryApiService, GalleryFacade } from './../../node_modules/data-store-mfe/src/public-api';
import { HomeComponent } from './home/home.component';
import { GalleryStoreModule } from 'data-store-mfe/src/lib/gallery-store/gallery-store.module';
import { AUTH_SERVICE } from '@shared/AUTH_SERVICE';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: 
  [
    DataStoreModule,
    GalleryStoreModule,
    BrowserModule, 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  providers:[
    { provide: AUTH_SERVICE, useClass: GalleryFacade }
   ]

})
export class AppModule implements DoBootstrap {
  readonly MFE_SELECTOR = 'mfe-guys-forever';
  injector = inject(Injector);

  ngDoBootstrap(): void {
    if (!customElements.get(this.MFE_SELECTOR)) {
      const custom = createCustomElement(AppComponent, {
        injector: this.injector
      });
      customElements.define(this.MFE_SELECTOR, custom);
    }
  }
}
