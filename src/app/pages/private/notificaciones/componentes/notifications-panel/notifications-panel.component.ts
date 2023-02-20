import { Component, Input, OnInit } from '@angular/core';
import { NotificationData } from '../../model/notification-data';

@Component({
  selector: 'app-notifications-panel',
  templateUrl: './notifications-panel.component.html',
  styleUrls: ['./notifications-panel.component.scss']
})
export class NotificationsPanelComponent implements OnInit {

  @Input() notification: NotificationData;
  constructor() { }

  ngOnInit(): void {
  }

  
  markNotificationAsRead(){
    
    console.log("funciona el boton")
  }

}

