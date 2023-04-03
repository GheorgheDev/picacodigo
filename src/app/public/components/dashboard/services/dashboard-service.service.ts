import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductData } from 'src/app/shared/models/product-data';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public readonly baseUrl = 'http://localhost:3000';
  public readonly baseUrl_picture = 'http://localhost:3000';
  logResult: any;

  constructor(private http: HttpClient) { }

  getAllGames(): Observable<ProductData[]> {
    const url = `${this.baseUrl}/games/all`;
    return this.http.get<ProductData[]>(url);
  }



  getAllGames_picture(): Observable<ProductData[]> {
    const url_picture = `${this.baseUrl_picture}/games_picture/all`;
    return this.http.get<ProductData[]>(url_picture);
  }



}
