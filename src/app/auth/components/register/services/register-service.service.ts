import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from 'src/app/shared/models/user-data';
@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  constructor(private http: HttpClient) { }

  addNewUser(newUser: UserData) {
    newUser.login = true;
    newUser.rol = 'user';
    newUser.picture = 'src\assets\media\michi-default.jpg';
    newUser.status = 'active';
    return this.http.post<UserData>('/api/users/add/', { newUser })
  }
}
