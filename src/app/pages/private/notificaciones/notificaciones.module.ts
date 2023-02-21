import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationPageComponent } from './componentes/notification-page/notification-page.component';
import { NotificationsPanelComponent } from './componentes/notifications-panel/notifications-panel.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { MailBoxPanelComponent } from './componentes/mail-box-panel/mail-box-panel.component';
import { SendMailPanelComponent } from './componentes/send-mail-panel/send-mail-panel.component';

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
