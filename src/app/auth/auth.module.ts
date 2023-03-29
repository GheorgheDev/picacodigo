import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule
  ],
  exports: [
  ]
})
export class AuthModule { }
