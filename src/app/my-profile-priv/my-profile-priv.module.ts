import { SharedModule } from 'src/app/shared/shared.module';
import { DialogUserDataChangeComponent } from './components/dialog-user-data-change/dialog-user-data-change.component';
import { DialogPasswordChangeComponent } from './components/dialog-password-change/dialog-password-change.component';
import { MyProfilePrivComponent } from './my-profile-priv.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MyProfilePrivComponent,
    DialogPasswordChangeComponent,
    DialogUserDataChangeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MyProfilePrivModule { }
