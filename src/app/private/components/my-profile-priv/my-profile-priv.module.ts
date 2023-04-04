import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogPasswordChangeComponent } from './components/dialog-password-change/dialog-password-change.component';
import { DialogUserDataChangeComponent } from './components/dialog-user-data-change/dialog-user-data-change.component';
import { MyProfilePrivComponent } from './components/my-profile-priv/my-profile-priv.component';

@NgModule({
  declarations: [
    MyProfilePrivComponent, DialogPasswordChangeComponent, DialogUserDataChangeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SharedModule,
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MyProfilePrivComponent,
  ]
})
export class MyProfilePrivModule { }
