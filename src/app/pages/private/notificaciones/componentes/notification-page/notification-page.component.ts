import { Component, OnInit } from '@angular/core';
import { NotificationData } from '../../model/notification-data';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss']
})
export class NotificationPageComponent implements OnInit { 
  notifications: NotificationData[] = [
    {
      from: "Andrea C.",
      content: "ha comentado",
      where: "en tu publicacion",
      link: "Monopoly",
      read: false
    },
    {
      from: "JuanJo G.",
      content: "ha comentado",
      where: "en tu publicacion",
      link: "MarioBros",
      read: false
    },
    {
      from: "Salvador S.",
      content: " le dió like a tu comentario",
      where: "en la publicacion",
      link: "Sonic",
      read: false
    },
    {
      from: "Gheorghe B.",
      content: "ha publicado",
      where: "a la venta",
      link: "Catan",
      read: false
    },
    {
      from: "Barbara R.",
      content: "ha comentado",
      where: "en tu publicacion sobre",
      link: "matamarcianos",
      read: false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

