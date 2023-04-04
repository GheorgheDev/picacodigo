import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductData } from 'src/app/public/model/game-data';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailServiceService {

  constructor(private http: HttpClient) { }
  
  updateGame(game: any): Observable<ProductData> {
    return this.http.patch<ProductData>('/api/games/update', { game } );
  }
}