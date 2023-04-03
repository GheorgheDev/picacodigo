import { Component, OnInit } from '@angular/core';
import { MailBoxData } from '../../model/mailbox-data';
import { UserData } from 'src/app/shared/models/user-data';
import { ShareService } from 'src/app/shared/services/share.service';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss'],
})
export class NotificationPageComponent implements OnInit {
  userType = 1;
  user_id = '4';

  /* Mailbox, get all mails to userid*/
  mailboxMessages: MailBoxData[] = [
    {
      message_id: '1',
      user_from_id: '1',
      user_to_id: '4',
      content: 'Hola Gheorghe soy Andrea',
      date: new Date('2023-03-04'),
      read: false,
    },
    {
      message_id: '1',
      user_from_id: '2',
      user_to_id: '4',
      content: 'Hola Gheorghe soy Juanjo',
      date: new Date('2023-03-05'),
      read: false,
    },
    {
      message_id: '3',
      user_from_id: '1',
      user_to_id: '4',
      content: 'Hola Gheorghe soy Andrea de nuevo',
      date: new Date('2023-03-05'),
      read: false,
    },
    {
      message_id: '4',
      user_from_id: '3',
      user_to_id: '4',
      content: 'Hola soy Salva',
      date: new Date('2023-03-05'),
      read: false,
    },
    {
      message_id: '5',
      user_from_id: '3',
      user_to_id: '4',
      content: 'Hola soy Salva otra vez',
      date: new Date('2023-03-06'),
      read: false,
    },
    {
      message_id: '6',
      user_from_id: '5',
      user_to_id: '4',
      content: 'Hola soy barbara',
      date: new Date('2023-03-07'),
      read: false,
    },
    {
      message_id: '7',
      user_from_id: '5',
      user_to_id: '4',
      content: 'Hola como estas, soy barbara de nuevo',
      date: new Date('2023-03-07'),
      read: false,
    },
    {
      message_id: '8',
      user_from_id: '2',
      user_to_id: '4',
      content: 'Hola soy juanjo otra vez',
      date: new Date('2023-03-09'),
      read: false,
    },
  ];

  /* all users */
  users: UserData[] = [
     {
      user_id: '1',
      username: 'AndreaC',
      fullname: 'Andrea Cebrian',
      picture: 'ruta',
    },
    {
      user_id: '2',
      username: 'JuanJo',
      fullname: 'Juan Sevilla',
      picture: 'ruta',
    },
    {
      user_id: '3',
      username: 'SalvadorS',
      fullname: 'Salvador Santo',
      picture: 'ruta',
    },
    {
      user_id: '4',
      username: 'GheorgheB',
      fullname: 'Gheorghe Bucurici',
      picture: 'ruta',
    },
    {
      user_id: '5',
      username: 'BarbaraR',
      fullname: 'Barbara Rodriguez',
      picture: 'ruta',
    },
  ];

  completeMailboxMessages: MailBoxData[] = [] as MailBoxData[];
  userThatSentTheMail: UserData = {} as UserData;

  constructor(private userService: ShareService) {}

  ngOnInit(): void {
    this.completeMailboxMessage();

    this.userService.getAllUsers().subscribe((data) => {
      console.log('data: ', data);
      this.users = data;

      console.log('user: ', this.users);
    });
  }

  completeMailboxMessage() {
    this.mailboxMessages.forEach((mailboxMessage) => {
      this.findUserThatSentTheMail(mailboxMessage.user_from_id);
      let completeMailboxMessage: MailBoxData;
      completeMailboxMessage = mailboxMessage;
      completeMailboxMessage.user_from_id = this.userThatSentTheMail.username;
      this.completeMailboxMessages.push(completeMailboxMessage);
    });
  }

  findUserThatSentTheMail(user_id: string) {
    let foundUserIndex = this.users.findIndex(
      (user) => user.user_id === user_id
    );
    this.userThatSentTheMail = this.users[foundUserIndex];
  }

  changeMailsReadStatus(index: string) {
    let foundMail = this.completeMailboxMessages.find(
      (elem) => elem.message_id == index
    );
    if (!!foundMail) foundMail.read = true;

    /* also do in service */
  }

  deleteMBMessage(mesID: string) {
    let foundMessageIndex = this.completeMailboxMessages.findIndex(
      (elem) => elem.message_id === mesID
    );
    this.completeMailboxMessages.splice(foundMessageIndex, 1);
    console.log(foundMessageIndex);
    /* also do in service */
  }
}
