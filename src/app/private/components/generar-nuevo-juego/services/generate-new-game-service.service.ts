import { Injectable } from '@angular/core';
import { NewProductData } from 'src/app/public/model/game-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewGamePictureData } from 'src/app/public/model/game-picture-data';


@Injectable({
  providedIn: 'root'
})
export class GenerateNewGameServiceService {

  constructor(private http:HttpClient) { }

  addNewGame(game: NewProductData): Observable<string>{
    return this.http.post<string>('/api/games/add', game )
  }

  addNewGamePicture(picture: NewGamePictureData): Observable<string>{
    return this.http.post<string>('/api/games_picture/add', picture )
  }
}
