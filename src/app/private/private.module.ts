import { HeaderModule } from './../shared/components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MyProfilePrivComponent } from './components/my-profile-priv/my-profile-priv.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    MyProfilePrivComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    HeaderModule,
    NotificacionesModule
  ],
  exports: [MyProfilePrivComponent],
})
export class PrivateModule {}
