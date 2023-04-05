import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProductServiceService {

  constructor(private http: HttpClient) { }

  getAllGamesByUserId(idUser: string): Observable<any> {
    return this.http.get(`/api/sales/get/${idUser}`)
      .pipe(
        map((games: any) => {
          return games;
        })
      )
  }
}
