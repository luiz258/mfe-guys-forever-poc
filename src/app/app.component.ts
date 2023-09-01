import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { Store } from '@ngrx/store';
import { AUTH_SERVICE } from '@shared/AUTH_SERVICE';
import { GalleryFacade } from 'data-store-mfe/src/public-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .container {
        margin: auto;
        width: 60vw;
        height: 90vh;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;

          background: #f8f8f8;
          padding: 9rem;
          border-radius: 12px;

          h3 {
            margin: 0;
            color: #c6c6c6;
          }

          h1 {
            margin: 0;
            font-size: 2.6rem;
            padding-bottom: 2rem;
            color: #c3002f;
          }
        }
      }
    `
  ],

})

export class AppComponent implements OnInit{
  @Input() hostname: string;

  title = 'mfe-guys-forever';

  todos:any ;
 // private state: new GalleryFacade();
  constructor(  
    @Inject(AUTH_SERVICE) private myService: GalleryFacade
   //private document: GalleryFacade
  // @Inject(GalleryFacade) state: GalleryFacade,
    ) {
   this.myService.init;
    
  }
  ngOnInit(): void {
   /// this.document.init();
  }

 
}
