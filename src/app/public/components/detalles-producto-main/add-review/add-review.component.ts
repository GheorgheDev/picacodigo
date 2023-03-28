import { NewReviewData } from './../../../model/review-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  user_id = '1'
  game_id = '2'

  newReview: NewReviewData

  constructor(private _fb: FormBuilder) { }

  reviewForm: FormGroup = this._fb.group({
    review_text:['', [Validators.required]]
  })

  ngOnInit(): void {
  }

  addReview() {  
    if (this.reviewForm.invalid) {
      this.reviewForm.markAllAsTouched();
    } else {
      let newReview: NewReviewData = {} as NewReviewData
      newReview.content =this.reviewForm.value.review_text
      newReview.game_id =this.game_id
      newReview.user_id =this.user_id
      console.log(newReview)
    };

    }




}
