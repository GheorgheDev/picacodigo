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
  userTypeFromSS: string | null = sessionStorage.getItem('userType');

  users: UserData[] = [
    {
      user_id: 'qubrf21n',
      username: 'SaraM',
      fullname: 'Sara Molina',
      picture: '/assets/chica.jpg',
    },
    {
      user_id: 'fhd28sgj',
      username: 'JohnDoe',
      fullname: 'John Doe',
      picture: '/assets/manolo.jpg',
    },
    {
      user_id: 'skt39qxc',
      username: 'EmilyJ',
      fullname: 'Emily Johnson',
      picture: '/assets/1.jpg',
    },
    {
      user_id: 'mjf75zty',
      username: 'MaxW',
      fullname: 'Max Williams',
      picture: '/assets/2.jpg',
    },
    {
      user_id: 'nhs64dpl',
      username: 'LauraC',
      fullname: 'Laura Chen',
      picture: '/assets/gato.jpg',
    },
    {
      user_id: 'rty89jkl',
      username: 'DavidG',
      fullname: 'David Garcia',
      picture: '/assets/3.jpg',
    },
  ];

  reviews: ReviewData[] = [
    {
      review_id: '79sd67f',
      content: 'Este es el mejor juego que existe',
      game_id: '2',
      user_id: 'qubrf21n',
    },
    {
      review_id: '23qw87d',
      content: 'No me gustó mucho este juego, esperaba más.',
      game_id: '2',
      user_id: 'fhd28sgj',
    },
    {
      review_id: '65we92r',
      content: 'Increíble experiencia de juego, me encantó',
      game_id: '2',
      user_id: 'skt39qxc',
    },
    {
      review_id: '09re34t',
      content:
        'No soy fanático de los juegos de aventuras, pero este me sorprendió gratamente',
      game_id: '2',
      user_id: 'mjf75zty',
    },
    {
      review_id: '17yu45h',
      content: 'Divertido juego para jugar con amigos, lo recomiendo',
      game_id: '2',
      user_id: 'nhs64dpl',
    },
    {
      review_id: '38gh27k',
      content:
        'Me gustó la trama del juego, aunque tuve algunos problemas técnicos',
      game_id: '2',
      user_id: 'rty89jkl',
    },
  ];
  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
    if(!!this.userTypeFromSS){
      this.userType = this.userTypeFromSS
    }
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