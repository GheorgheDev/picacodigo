import { ProductDetailServiceService } from '../services/product-detail-service.service';
import { GameReview } from './../../../model/game-review';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent implements OnInit {
  @Input() completeReview: GameReview;

  userType: string = '0';
  userTypeFromSS: string | null = sessionStorage.getItem('userType');

  constructor(private productDetailService: ProductDetailServiceService) { }

  deleteReview(review_id: string) {
    this.productDetailService.deleteReview(review_id).subscribe(
      (review) => {
      },
      (error) => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
    if (!!this.userTypeFromSS) {
      this.userType = this.userTypeFromSS
    }
  }
}