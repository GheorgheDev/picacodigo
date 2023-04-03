import { Injectable } from '@angular/core';
import { UserData } from '../../my-profile-priv/components/dialog-password-change/dialog-password-change.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MailBoxData } from '../model/mailbox-data';

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


}
