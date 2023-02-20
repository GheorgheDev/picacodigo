import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationPageComponent } from './componentes/notification-page/notification-page.component';
import { NotificationsPanelComponent } from './componentes/notifications-panel/notifications-panel.component';
import { MessagesPanelComponent } from './componentes/messages-panel/messages-panel.component';

import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    NotificationPageComponent,
    NotificationsPanelComponent,
    MessagesPanelComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    NotificationPageComponent
  ]
})
export class NotificacionesModule { }
