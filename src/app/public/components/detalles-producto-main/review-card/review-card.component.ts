import { GameReview } from './../../../model/game-review';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent implements OnInit {

  userType='1'

  @Input() completeReview: GameReview;



  deleteReview(value:string){
    /* borrar review */
    console.log(value)
  }

  ngOnInit(): void {
      
  }

}
