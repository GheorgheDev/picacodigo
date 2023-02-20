import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesPanelComponent } from './pages/private/notificaciones/componentes/messages-panel/messages-panel.component';
import { NotificationsPanelComponent } from './pages/private/notificaciones/componentes/notifications-panel/notifications-panel.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
