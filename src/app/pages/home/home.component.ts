import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ionArrowBack, ionArrowForward, ionPricetagsSharp, ionThumbsUpSharp, ionCallSharp } from '@ng-icons/ionicons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  viewProviders: [provideIcons({ ionArrowBack, ionArrowForward, ionThumbsUpSharp, ionPricetagsSharp, ionCallSharp})]
})
export class HomeComponent {
  images = [
    'https://ares.shiftdelete.net/2023/06/marvels-spiderman-2-fiyati-cikis-tarihi-1.webp',
    'https://www.misternoob.com/wp-content/uploads/2022/07/Spider-Man-PC1.jpg',
    'https://donanimarsivi.com/wp-content/uploads/2022/08/karikocagaming-Marvels-Spider-Man-incelemesi-ps4-1024x576.jpg',
  ];
  adImage = [
  'https://cdn-media.glamira.com/media/bannerslides/apple_watch_case_subbanner_update_23_az_tr.jpg'
  ];
  collectionImages = [
  'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg',
  'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg',
  'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg',
  'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg',
  'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg',
  'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg',
  'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'


  ];
  currentImage = 0;

  ngOnInit() {
    this.startSlider();
  }

  startSlider() {
    setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  nextImage() {
    this.currentImage = (this.currentImage + 1) % this.images.length;
  }

  prevImage() {
    this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
  }
}
