import { GameReview } from './../../../model/game-review';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent implements OnInit {

  @Input() completeReview: GameReview;

  userType = '1'

  /* AQUÍ VA EL SERVICIO DE DELETEREVIEW */

  deleteReview(value: string) {
    /* borrar review */
    console.log(value)
  }

  ngOnInit(): void { }
}
