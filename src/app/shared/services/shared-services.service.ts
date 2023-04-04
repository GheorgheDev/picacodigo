import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductData } from 'src/app/public/model/game-data';
import { GamePictureData } from 'src/app/public/model/game-picture-data';
import { map } from 'rxjs/operators';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  constructor(private http: HttpClient) { }

  public readonly baseUrl = 'http://localhost:3000/api';
  public readonly baseUrl_picture = 'http://localhost:3000/api';

  getAllGames(): Observable<ProductData[]> {
    const url = `${this.baseUrl}/games/all`;
    return this.http.get<ProductData[]>(url);
  }

  getAllPicturesByGameId(gameId: string): Observable<GamePictureData[]> {
    const url_picture = `${this.baseUrl_picture}/games_picture/get/all/${gameId}`;
    return this.http.get<GamePictureData[]>(url_picture);
  }

  getGameById(game_id: string):Observable<ProductData>{
    return this.http.get<ProductData>(`/api/games/get/${game_id}`);
  }

  getAllMessagesByUserId(idUser: string): Observable<any> {
    return this.http.get<any>(`/api/messages/get/all/${idUser}`)
      .pipe(
        map((res: any) => res)
      )
  }

  getAllUsers(): Observable<UserData[]> {
    return this.http.get<UserData[]>('http://localhost:3000/api/users/all');
  }

  getUserById(idUser: string): Observable<UserData> {
    return this.http.get<UserData>(`/api/users/get/${idUser}`)
      .pipe(
        map((userLoggued: UserData) => userLoggued)
      )
  }
}
