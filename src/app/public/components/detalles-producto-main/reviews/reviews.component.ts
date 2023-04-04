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
  userType: string = '1';
  game_id: string = '0aeeb46d-d233-4649-94aa-91559537af21'

  constructor(public dialog: MatDialog, private productDetailService: ProductDetailServiceService) { }

  ngOnInit() {
    this.completeAllReviews();
  }

  completeReviews: GameReview[] = [] as GameReview[]

  userThatMadeTheReview: UserData;
  reviews: ReviewData[] = []

  completeAllReviews() {
    this.productDetailService.allReviewsByGameId(this.game_id).subscribe(
      (review) => {
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