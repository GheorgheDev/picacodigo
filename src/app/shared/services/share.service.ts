import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../models/user-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<UserData[]> {
    return this.http.get<UserData[]>('http://localhost:3000/api/users/all');
  }
}
