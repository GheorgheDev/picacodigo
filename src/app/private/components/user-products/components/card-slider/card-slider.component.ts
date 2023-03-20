import { Component, OnInit, Input } from '@angular/core';
import { ProductData } from 'src/app/shared/models/product-data';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent implements OnInit {

  @Input() product: ProductData;
  constructor() { }

  ngOnInit(): void { 
  }

  selectedPage: number = 0;
  showNext: boolean = true;
  showPrevious: boolean = false;
  cardGroups: ProductData[][] = [];
  cardsPerSlider: number = 4;
  pages: ProductData[][] = [];

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