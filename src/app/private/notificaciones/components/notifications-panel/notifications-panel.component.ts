import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NotificationData } from '../../model/notification-data';

@Component({
  selector: 'app-notifications-panel',
  templateUrl: './notifications-panel.component.html',
  styleUrls: ['./notifications-panel.component.scss']
})
export class NotificationsPanelComponent implements OnInit {

  @Input() notification: NotificationData;
  @Output() markAsRead = new EventEmitter<number>();
  markNotificationAsRead(value:number){
    this.markAsRead.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

 
}