import { Component, OnInit } from '@angular/core';
import { MailBoxData } from '../../model/mailbox-data';
import { UserData } from 'src/app/shared/models/user-data';
import { NotificationServiceService } from '../../services/notification-service.service';
import { ShareService } from 'src/app/shared/services/share.service';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss'],
})
export class NotificationPageComponent implements OnInit {
  user_id = "0" 
  user_idFromSS: string | null = sessionStorage.getItem('user_id');
  userType: string = '0';
  userTypeFromSS: string | null = sessionStorage.getItem('userType');
  mailboxMessages: MailBoxData[] = [];
  users: UserData[] = [];
  completeMailboxMessages: MailBoxData[] = [] as MailBoxData[];
  userThatSentTheMail: UserData = {} as UserData;

  constructor(
    private notificationService: NotificationServiceService
  ) { }

  ngOnInit(): void {
    if(!!this.userTypeFromSS){
      this.userType = this.userTypeFromSS
    }
    if(!!this.user_idFromSS){
      this.user_id = this.user_idFromSS
    }
    this.notificationService.getAllMessagesByUserId(this.user_id)
      .subscribe(messages => {
        this.completeMailboxMessages = messages;
      })
  }

  changeMailsReadStatus(idMessage: string) {
    this.notificationService.markMessageAsRead(idMessage)
      .subscribe(() => {
        location.reload();
      })
  }

  deleteMBMessage(idMessage: string) {
    this.notificationService.deleteMessage(idMessage)
      .subscribe(() => {
        location.reload();
      })
  }
}
