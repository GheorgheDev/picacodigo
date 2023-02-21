import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationPageComponent } from './components/notification-page/notification-page.component';
import { NotificationsPanelComponent } from './components/notifications-panel/notifications-panel.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { MailBoxPanelComponent } from './components/mail-box-panel/mail-box-panel.component';
import { SendMailPanelComponent } from './components/send-mail-panel/send-mail-panel.component';

@NgModule({
  declarations: [
    NotificationPageComponent,
    NotificationsPanelComponent,
    MailBoxPanelComponent,
    SendMailPanelComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule
  ],
  exports: [
    NotificationPageComponent
  ]
})
export class NotificacionesModule { }
