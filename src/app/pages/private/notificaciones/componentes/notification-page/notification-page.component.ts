import { Component, OnInit } from '@angular/core';
import { NotificationData } from '../../model/notification-data';
import { MailBoxData } from '../../model/mailBox-data';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss']
})
export class NotificationPageComponent implements OnInit { 
  notifications: NotificationData[] = [
    {
      id: 1,
      from: "Andrea C.",
      content: "ha comentado",
      where: "en tu publicacion",
      link: "Monopoly",
      read: false
    },
    {
      id: 2,
      from: "JuanJo G.",
      content: "ha comentado",
      where: "en tu publicacion",
      link: "MarioBros",
      read: false
    },
    {
      id: 3,
      from: "Salvador S.",
      content: " le dió like a tu comentario",
      where: "en la publicacion",
      link: "Sonic",
      read: false
    },
    {
      id: 4,
      from: "Gheorghe B.",
      content: "ha publicado",
      where: "a la venta",
      link: "Catan",
      read: false
    },
    {
      id: 5,
      from: "Barbara R.",
      content: "ha comentado",
      where: "en tu publicacion sobre",
      link: "matamarcianos",
      read: true
    },
  ]

  changeReadStatus(index: number) {
    let foundNotification = this.notifications.find(elem=> elem.id == index)
    if(!!foundNotification)
      foundNotification.read=true;
  }

  /* Mailbox */

  mailboxMessages: MailBoxData[] = [
    {
      id: 1,
      fromID: 1,
      toID: 2,
      content: "Hola como estas",
      date: "05/01/2023"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

