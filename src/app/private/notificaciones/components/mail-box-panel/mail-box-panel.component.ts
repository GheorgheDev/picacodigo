import { MailBoxData } from './../../model/mailbox-data';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mail-box-panel',
  templateUrl: './mail-box-panel.component.html',
  styleUrls: ['./mail-box-panel.component.scss']
})
export class MailBoxPanelComponent implements OnInit {

  @Input() mailboxMessage: MailBoxData;
  @Output() markMailsAsRead = new EventEmitter<string>();
  markMailAsRead(value:string){
    this.markMailsAsRead.emit(value);
  }
  @Output() deleteMessage = new EventEmitter<string>();
  deleteMailBoxMessage(value:string){
    this.deleteMessage.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
