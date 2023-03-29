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
    }
  ]

  user_id = 1

  changeReadStatus(index: number) {
    let foundNotification = this.notifications.find(elem=> elem.id == index)
    if(!!foundNotification)
      foundNotification.read=true;
  }

  deleteNotifi(notifID: number) {
    let foundNotificationIndex = this.notifications.findIndex(elem=> elem.id === notifID)
    this.notifications.splice(foundNotificationIndex, 1)
  }


  /* Mailbox */

  mailboxMessages: MailBoxData[] = [
    {
      id: 1,
      from: "Barbara",
      to: "Gheorghe",
      content: "Hola Gheorghe necesito ayuda",
      date: "05-01-2023",
      read: false
    },
    {
      id: 2,
      from: "Gheorghe",
      to: "Bárbara",
      content: "no",
      date: "05-01-2023",
      read: true
    },
    {
      id: 3,
      from: "Andrea",
      to: "Gheorghe",
      content: "Hola Gheorghe yo tambien",
      date: "05-01-2023",
      read: false
    },
    {
      id: 4,
      from: "Gheorghe",
      to: "Andrea",
      content: "no tampoco no tampoco no tampoco no tampoco no tampoco no tampoco no tampoco no tampoco no tampoco ",
      date: "05-01-2023",
      read: false
    },
    {
      id: 5,
      from: "Juanjo",
      to: "Gheorghe",
      content: "Hola yo tambien",
      date: "05-01-2023",
      read: false
    },
    {
      id: 6,
      from: "Gheorghe",
      to: "Juanjo",
      content: "bueno ok",
      date: "05-01-2023",
      read: false
    },
    {
      id: 7,
      from: "Salvador",
      to: "Gheorghe",
      content: "Hola como estas, soy un bombero",
      date: "05-01-2023",
      read: false
    },
    {
      id: 8,
      from: "Gheorghe",
      to: "Salvador",
      content: "Hola pos ok bien x ti",
      date: "05-01-2023",
      read: false
    }
    
  ]

  changeMailsReadStatus(index: number) {
    let foundMail = this.mailboxMessages.find(elem=> elem.id == index)
    if(!!foundMail)
    foundMail.read=true;
  }

  deleteMBMessage(mesID: number) {
    let foundMessageIndex = this.mailboxMessages.findIndex(elem=> elem.id === mesID)
    this.mailboxMessages.splice(foundMessageIndex, 1)
    console.log(foundMessageIndex)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

