import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/shared/models/user-data';

@Injectable({
  providedIn: 'root',
})
export class NotificationServiceService {
  constructor(private http: HttpClient) {}

  getAllgetAllMessagesUsers(id: string): Observable<UserData[]> {
    return this.http.get<UserData[]>(
      'http://localhost:3000/api/messages/get/all/' + id
    );
  }



  getAllMessagesByUserId(idUser: string): Observable<any> {
    return this.http.get<any>(`/api/messages/get/all/${idUser}`)
      .pipe(
        map((res: any) => res)
      )
  }

  markMessageAsRead(idMessage: any): Observable<any> {
    return this.http.patch(`/api/messages/update/message/read`, { idMessage })
  }

  deleteMessage(idMessage: any): Observable<any> {
    return this.http.delete(`/api/messages/delete/message/${idMessage}`);
  }
}
