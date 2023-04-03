import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductData } from '../models/product-data';
import { GamePictureData } from 'src/app/public/model/game-picture-data';


@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  constructor(private http: HttpClient) { }

  public readonly baseUrl = 'http://localhost:3000';
  public readonly baseUrl_picture = 'http://localhost:3000';

  getAllGames(): Observable<ProductData[]> {
    const url = `${this.baseUrl}/games/all`;
    return this.http.get<ProductData[]>(url);
  }

  getAllPicturesByGameId(gameId: string): Observable<GamePictureData[]> {
    const url_picture = `${this.baseUrl_picture}/games_picture/get/all/${gameId}`;
    return this.http.get<GamePictureData[]>(url_picture);
  }
}
