import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from 'src/app/shared/models/user-data';
@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  constructor(private http: HttpClient) { }

  addNewUser(username: string, email: string, password: string) {
    return this.http.post<UserData>('/api/add', { username, email, password })
  }
}
