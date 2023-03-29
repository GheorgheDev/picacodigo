import { NeedLoginComponent } from './../../need-login/need-login.component';
import { GameReview } from './../../../model/game-review';
import { ReviewData } from './../../../model/review-data';
import { UserData } from 'src/app/shared/models/user-data';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddReviewComponent } from '../add-review/add-review.component';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {

  userType:string = '1';
  
  users: UserData[] = [
    {
      user_id: 'qubrf21n',
      user_username: 'SaraM',
      name: 'Sara Molina',
      img: '/assets/chica.jpg',
    },
    {
      user_id: 'fhd28sgj',
      user_username: 'JohnDoe',
      name: 'John Doe',
      img: '/assets/manolo.jpg',
    },
    {
      user_id: 'skt39qxc',
      user_username: 'EmilyJ',
      name: 'Emily Johnson',
      img: '/assets/1.jpg',
    },
    {
      user_id: 'mjf75zty',
      user_username: 'MaxW',
      name: 'Max Williams',
      img: '/assets/2.jpg',
    },
    {
      user_id: 'nhs64dpl',
      user_username: 'LauraC',
      name: 'Laura Chen',
      img: '/assets/gato.jpg',
    },
    {
      user_id: 'rty89jkl',
      user_username: 'DavidG',
      name: 'David Garcia',
      img: '/assets/3.jpg',
    },
  ];

  reviews: ReviewData[] = [
    /* {
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
    }, */
  ];
  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
    this.completeAllReviews();
  }

  completeReviews: GameReview[] = [] as GameReview[]
  

  userThatMadeTheReview: UserData;

  completeAllReviews() {
    for (let i = 0; i < this.reviews.length; i++) {
      let completeReview: GameReview = {} as GameReview;
      this.userThatMadeTheReview = {} as UserData
      this.findUserThatMadeTheReview(this.reviews[i].user_id);
      if(!!this.userThatMadeTheReview){
        completeReview.content = this.reviews[i].content;
        completeReview.user_username = this.userThatMadeTheReview.user_username;
        completeReview.user_img = this.userThatMadeTheReview.img;
        console.log("aqui termina de asignar datos", completeReview)
        this.completeReviews.push(completeReview);
      }    
    }
    console.log('1', this.completeReviews);
  }

  findUserThatMadeTheReview(user_id: string) {
    const userReview = this.users.find((user) => user.user_id == user_id);
    if (!!userReview) {
      this.userThatMadeTheReview = userReview;
    }
  }

  openAddAReviewDialog(){
    if(this.userType=='1')
      this.dialog.open(AddReviewComponent);
    else
    this.dialog.open(NeedLoginComponent);
  }
}
