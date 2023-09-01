import { Component } from '@angular/core';
// import { GalleryFacade } from 'data-store-mfe/src/lib/gallery-store/gallery-facade.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // cats = this.galleryFacade.allGallery$ as any;
  // selectedCats = this.galleryFacade.selectedCats$;

  constructor(
    //private galleryFacade: GalleryFacade
    ) {}
  
  ngOnInit(): void {
   // this.galleryFacade.init();
    //console.log(this.cats, 'cats');
   
  }

  toggleSelectCat(cat: any) {
   // this.galleryFacade.toggleSelectCat(cat);
  }

  isSelected(catId: any) {
   // return this.galleryFacade.isCatSelected(catId);
  }
}
