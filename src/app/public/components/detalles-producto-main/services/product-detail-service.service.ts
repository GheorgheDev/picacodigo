import { ReviewData } from './../../../model/review-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailServiceService {
  constructor(private http: HttpClient) { }

  allReviewsByGameId(game_id: string){
    return this.http.get('/review/get/all/'+game_id)
  }

  addNewReview(newReview: ReviewData){
    return this.http.post('/review/post', { newReview })
  }

  deleteReview(review_id: string) {
    return this.http.delete('/review/delete'+review_id)
  }

  getAllUsers() {
    return this.http.get('/users/all')
  }
}