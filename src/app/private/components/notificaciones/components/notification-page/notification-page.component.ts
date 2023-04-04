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
  userType = 1;
  user_id = '2';
  mailboxMessages: MailBoxData[] = [];
  users: UserData[] = [];
  completeMailboxMessages: MailBoxData[] = [] as MailBoxData[];
  userThatSentTheMail: UserData = {} as UserData;

  constructor(
    private notificationService: NotificationServiceService
  ) { }

  ngOnInit(): void {
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

  deleteMessage(idMessage: string) {
    this.notificationService.deleteMessage(idMessage)
      .subscribe(() => {
        location.reload();
      })
  }
}
