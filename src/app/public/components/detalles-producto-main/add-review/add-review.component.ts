import { NewReviewData, ReviewData } from './../../../model/review-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { ProductDetailServiceService } from '../services/product-detail-service.service';


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
  game_id: string = '0';
  game_idFromSS: string | null = sessionStorage.getItem('game_id');

  user_id = "0"
  user_idFromSS: string | null = sessionStorage.getItem('user_id');

  newReview: NewReviewData

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  constructor(private _fb: FormBuilder, private productDetailService: ProductDetailServiceService) { }

  reviewForm: FormGroup = this._fb.group({
    content: ['', [Validators.required]]
  })

  ngOnInit(): void {
    if (!!this.user_idFromSS) {
      this.user_id = this.user_idFromSS
    }
    if (!!this.game_idFromSS) {
      this.game_id = this.game_idFromSS
    }
  }

  addReview() {
    let textContent: string = this.reviewForm.get('content')?.value
    let newReview: NewReviewData = {
      content: textContent,
      user_id: this.user_id,
      game_id: this.game_id
    }

    console.log("prueba contenido", newReview.content)
    console.log("prueba user", newReview.user_id)
    console.log("prueba game", newReview.game_id)

    this.productDetailService.addNewReview(newReview).subscribe(
      (review) => {
        console.log("0000000000", review)
        // location.reload()
      },
      (error) => {
        console.log(error)
      }
    )
  }
}