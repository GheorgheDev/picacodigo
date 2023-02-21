import { MailBoxData } from './../../model/mailbox-data';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mail-box-panel',
  templateUrl: './mail-box-panel.component.html',
  styleUrls: ['./mail-box-panel.component.scss']
})
export class MailBoxPanelComponent implements OnInit {

  @Input() mailboxMessage: MailBoxData;
  constructor() { }

  ngOnInit(): void {
  }

}
