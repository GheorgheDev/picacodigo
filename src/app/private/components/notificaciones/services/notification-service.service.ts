import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MailBoxDataDB, NewMailBoxDataDB } from '../model/mailbox-data';

@Injectable({
  providedIn: 'root',
})
export class NotificationServiceService {
  constructor(private http: HttpClient) {}

  

  markMessageAsRead(idMessage: string): Observable<MailBoxDataDB> {
    return this.http.patch<MailBoxDataDB>(`/api/messages/update/message/read`, { idMessage })
  }

  deleteMessage(idMessage: string){
    return this.http.delete(`/api/messages/delete/message/${idMessage}`);
  }

  addNewMessage(mail: NewMailBoxDataDB): Observable<string>{
    return this.http.post<string>('/api/messages/add', mail )
  }

  
 
}
