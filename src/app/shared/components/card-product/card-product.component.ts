import { Component, Input, OnInit } from '@angular/core';
import { ProductData } from '../../models/product-data';


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() product: ProductData;
  constructor() {}

  ngOnInit(): void {
    
  }
  
  showStars(stars: number | undefined) : string {
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