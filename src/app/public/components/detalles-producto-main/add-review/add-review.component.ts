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

  user_id = '340b0117-7df9-4f38-985e-7accc8712eb8'
  game_id = '0aeeb46d-d233-4649-94aa-91559537af21'

  newReview: NewReviewData

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  constructor(private _fb: FormBuilder, private productDetailService: ProductDetailServiceService) { }

  reviewForm: FormGroup = this._fb.group({
    content: ['', [Validators.required]]
  })

  ngOnInit(): void {
  }

  addReview() {
    let textContent: string = this.reviewForm.get('content')?.value
    let newReview: NewReviewData = {
      content: textContent,
      user_id: this.user_id,
      game_id: this.game_id
    }
    this.productDetailService.addNewReview(newReview).subscribe(
      (review) => {
        location.reload()
      },
      (error) => {
        console.log(error)
      }
    )
  }
}