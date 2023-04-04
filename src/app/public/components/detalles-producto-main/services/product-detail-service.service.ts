import { Observable } from 'rxjs';
import { NewReviewData, ReviewData } from './../../../model/review-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from 'src/app/shared/models/user-data';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailServiceService {
  constructor(private http: HttpClient) { }

  allReviewsByGameId(game_id: string): Observable<ReviewData[]>{
    return this.http.get<ReviewData[]>('/api/reviews/get/all/'+game_id)
  }

  addNewReview(newReview: NewReviewData): Observable<string>{
    return this.http.post<string>('/api/reviews/add', newReview)
  }

  deleteReview(review_id: string) {
    return this.http.delete('/api/reviews/delete/'+review_id)
  }

  getUserById(user_id: string): Observable<UserData> {
    return this.http.get<UserData>('/api/users/get/' + user_id)
  }
}