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

  /* AQUÍ VA EL SERVICIO DE DELETEREVIEW */

  deleteReview(value: string) {
    /* borrar review */
    console.log(value)
  }

  ngOnInit(): void {
    if(!!this.userTypeFromSS){
      this.userType = this.userTypeFromSS
    }
  }

}
