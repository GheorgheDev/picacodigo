import { ProductData } from './../../../../../shared/models/product-data';
import * as _ from 'lodash';
import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent implements OnInit {
  @Input() set product(data: ProductData[]) {
    this.products = data;
   }

  constructor() { }

  ngOnInit(): void {
    this.slider();
    this.onWindowResize();
  }

  products: ProductData[] = [];
  originalProducts: ProductData[] = [];
  selectedPage: number = 0;
  showNext: boolean = true;
  showPrevious: boolean = false;
  cardsPerPage: number = 9;
  pages: ProductData[][] = [];
  getScreenWidth: number;

  private slider() {
    let salesProducts: ProductData[] = [];
    this.products.forEach(element => salesProducts.push(element));


    this.pages = [];

    while (salesProducts.length > 0) {
      var page = salesProducts.slice(0, this.cardsPerPage);
      salesProducts.splice(0, this.cardsPerPage);

      this.pages.push(page);
      if (this.pages.length > 1)
        this.showNext = true
      else
        this.showNext = false
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;

    if (this.getScreenWidth < 481) {
      this.cardsPerPage = 3;
    } else if (this.getScreenWidth < 1024) {
      this.cardsPerPage = 6;
    } else {
      this.cardsPerPage = 9;
    }

    this.pages = [];
    this.slider();
  }

  previousPage() {
    this.selectedPage--
    this.showNext = true;
    if (this.selectedPage !== 0) {
      this.showPrevious = true;
    } else {
      this.showPrevious = false;
    }
  }

  nextPage() {
    this.selectedPage++
    this.showPrevious = true;
    if (this.selectedPage === this.pages.length - 1) {
      this.showNext = false
    } else {
      this.showNext = true;
    }
  }

  showStars(stars: number | undefined): string {
    switch (stars) {
      case 1: return '★✩✩✩✩'
      case 2: return '★★✩✩✩'
      case 3: return '★★★✩✩'
      case 4: return '★★★★✩'
      case 5: return '★★★★★'
    }
    return ''
  }
}