import { Component, OnInit } from '@angular/core';
import { NotificationData } from '../../model/notification-data';
import { MailBoxData } from '../../model/mailbox-data';

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
      read: true
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
      read: false
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
      fromID: 5,
      toID: 4,
      content: "Hola Gheorge necesito ayuda",
      date: "05/01/2023"
    },
    {
      id: 2,
      fromID: 4,
      toID: 5,
      content: "no",
      date: "05/01/2023"
    },
    {
      id: 3,
      fromID: 1,
      toID: 4,
      content: "Hola Gheorghe yo tambien",
      date: "05/01/2023"
    },
    {
      id: 4,
      fromID: 4,
      toID: 1,
      content: "no tampoco",
      date: "05/01/2023"
    },
    {
      id: 5,
      fromID: 2,
      toID: 4,
      content: "Hola yo tambien",
      date: "05/01/2023"
    },
    {
      id: 6,
      fromID: 4,
      toID: 2,
      content: "bueno ok",
      date: "05/01/2023"
    },
    {
      id: 7,
      fromID: 3,
      toID: 4,
      content: "Hola como estas, soy un bombero",
      date: "05/01/2023"
    },
    {
      id: 8,
      fromID: 4,
      toID: 3,
      content: "Hola pos ok bien x ti",
      date: "05/01/2023"
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

