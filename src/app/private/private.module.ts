import { DialogProfilePhotoChangeComponent } from './my-profile-priv/components/dialog-profile-photo-change/dialog-profile-photo-change.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogUserDataChangeComponent } from './my-profile-priv/components/dialog-user-data-change/dialog-user-data-change.component';
import { DialogPasswordChangeComponent } from './my-profile-priv/components/dialog-password-change/dialog-password-change.component';
import { MyProfilePrivComponent } from './my-profile-priv/my-profile-priv.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderModule } from './../shared/components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionUsuariosModule } from './gestion-usuarios/gestion-usuarios.module';
import { UserProductsModule } from './components/user-products/user-products.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [MyProfilePrivComponent, DialogPasswordChangeComponent, DialogUserDataChangeComponent, DialogProfilePhotoChangeComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    HeaderModule,
    NotificacionesModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    GestionUsuariosModule,
    UserProductsModule,
    SharedModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [MyProfilePrivComponent]
})
export class PrivateModule { }
