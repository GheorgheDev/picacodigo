import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/shared/models/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserManagementServiceService {
  constructor(private http: HttpClient) { }

  getUsersForManagement(): Observable<UserData[]> {
    return this.http.get<UserData[]>('/api/users/all')
  }
}