import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogUserDataChangeComponent } from './components/dialog-user-data-change/dialog-user-data-change.component';
import { DialogProfilePhotoChangeComponent } from './components/dialog-profile-photo-change/dialog-profile-photo-change.component';
import { DialogPasswordChangeComponent } from './components/dialog-password-change/dialog-password-change.component';
import { MyProfilePrivComponent } from './components/my-profile-priv/my-profile-priv.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MyProfilePrivComponent, DialogPasswordChangeComponent, DialogProfilePhotoChangeComponent, DialogUserDataChangeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SharedModule,
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  exports: [
    MyProfilePrivComponent,
  ]
})
export class MyProfilePrivModule { }
