import { LoginModule } from './components/login/login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterModule } from './components/register/register.module';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule,
    AuthRoutingModule
  ],
  exports: [
  ]
})
export class AuthModule { }
