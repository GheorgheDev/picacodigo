import { NeedLoginComponent } from './../../need-login/need-login.component';
import { GameReview } from './../../../model/game-review';
import { ReviewData } from './../../../model/review-data';
import { UserData } from 'src/app/shared/models/user-data';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddReviewComponent } from '../add-review/add-review.component';
import { ProductDetailServiceService } from '../services/product-detail-service.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  userType: string = '0';
  game_id: string = '0';

  userTypeFromSS: string | null = sessionStorage.getItem('userType');
  game_idFromSS: string | null = sessionStorage.getItem('game_id');

  constructor(public dialog: MatDialog, private productDetailService: ProductDetailServiceService) { }

  ngOnInit() {
    if (!!this.userTypeFromSS) {
      this.userType = this.userTypeFromSS
    }
    if (!!this.game_idFromSS) {
      this.game_id = this.game_idFromSS
    }
    this.completeAllReviews();
  }

  completeReviews: GameReview[] = [] as GameReview[]

  userThatMadeTheReview: UserData;
  reviews: ReviewData[] = []

  completeAllReviews() {
    this.productDetailService.allReviewsByGameId(this.game_id).subscribe(
      (review) => {

        console.log("111111111", review)

        for (let i = 0; i < review.length; i++) {
          this.findUserThatMadeTheReview(review[i]);
        }
      },
      (error) => {
        console.log(error)
      }
    )
  }

  findUserThatMadeTheReview(review: ReviewData) {
    this.productDetailService.getUserById(review.user_id).subscribe(
      (user) => {
        this.userThatMadeTheReview = user

        let completeReview: GameReview = {} as GameReview;

        if (!!this.userThatMadeTheReview) {
          completeReview.review_id = review.review_id;
          completeReview.content = review.content;
          completeReview.username = this.userThatMadeTheReview.username;
          completeReview.picture = this.userThatMadeTheReview.picture;
          this.completeReviews.push(completeReview);
        }
      },
      (error) => {
        console.log(error)
      }
    )
  }

  openAddAReviewDialog() {
    if (this.userType == '1')
      this.dialog.open(AddReviewComponent);
    else
      this.dialog.open(NeedLoginComponent);
  }
}