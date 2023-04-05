import { MailBoxData } from '../../model/mailbox-data';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mail-box-panel',
  templateUrl: './mail-box-panel.component.html',
  styleUrls: ['./mail-box-panel.component.scss']
})
export class MailBoxPanelComponent implements OnInit {

  @Input() completeMailboxMessage: MailBoxData;
  @Output() markMailsAsRead = new EventEmitter<string>();
  markMailAsRead(message_id:string){
    this.markMailsAsRead.emit(message_id);
  }
  @Output() deleteMessage = new EventEmitter<string>();
  deleteMailBoxMessage(message_id:string){
    this.deleteMessage.emit(message_id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
