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

  unbanUser(user_id: string): Observable<UserData> {
    return this.http.put<UserData>('/api/users/unbanUser/' + user_id, null)
  }

  banUser(user_id: string): Observable<UserData> {
    return this.http.put<UserData>('/api/users/banUser/' + user_id, null)
  }
}