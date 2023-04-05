import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from 'src/app/shared/models/user-data';

@Injectable({
  providedIn: 'root'
})
export class MyProfilePrivServiceService {

  constructor(private http: HttpClient) { }

  updateUser(user: UserData): Observable<UserData> {
    return this.http.put<UserData>(`http://localhost:3000/api/users/update`, { user });
  }

  changePassword(user: UserData): Observable<UserData> {
    return this.http.put<UserData>(`http://localhost:3000/api/users/update`, { user });
  }
}
