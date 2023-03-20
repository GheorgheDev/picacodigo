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
    this.sliderPaginator()
  }

  selectedPage: number = 0;
  showNext: boolean = true;
  showPrevious: boolean = false;
  cardGroups: ProductData[][] = [];
  cardsPerSlider: number = 4;
  pages: ProductData[][] = [];


  private sliderPaginator() {
    let finalGroupList: ProductData[] = [];

    console.log("final group", finalGroupList)

    console.log(this.product)

    while (finalGroupList.length > 0) {
      var page = finalGroupList.slice(0, this.cardsPerSlider);

      finalGroupList.splice(0, this.cardsPerSlider);

      this.cardGroups.push(page);
      if (this.cardGroups.length > 1)
        this.showNext = true;
      else
        this.showNext = false;
    }

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
    if (this.selectedPage === this.cardGroups.length - 1) {
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