import { InjectionToken } from '@angular/core';
import { Store } from '@ngrx/store';
import { GalleryFacade } from 'data-store-mfe/src/public-api';

// export const AUTH_SERVICE = new InjectionToken<GalleryFacade>('AUTH_SERVICE');
// private readonly store: Store
var store: Store;
export const AUTH_SERVICE = new InjectionToken<GalleryFacade>('AUTH_SERVICE', {

    providedIn: 'root', // Ou qualquer outro nível de providência apropriado
    factory: () => new GalleryFacade(store) // Substitua com a lógica para criar uma instância do seu serviço
  });
