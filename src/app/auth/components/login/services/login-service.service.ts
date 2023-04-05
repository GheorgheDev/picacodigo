import { UserData } from 'src/app/shared/models/user-data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  getUserByLogin(email: string, password: string): Observable<UserData> {
    return this.http.get<UserData>('/api/users/login/'+email+"/"+password)
  }
}
