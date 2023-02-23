import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrivateModule } from './private/private.module';
import { PublicModule } from './public/public.module';
import { SearchBarComponent } from './shared/components/header/search-bar/search-bar.component';
import { LoginComponent } from './auth/login/login.component';
import { PublicHeaderComponent } from './shared/components/header/public-header/public-header.component';
import { CommonHeaderComponent } from './shared/components/header/common-header/common-header.component';
import { PrivateHeaderComponent } from './shared/components/header/private-header/private-header.component';
import { DashboardComponent } from './public/components/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { SharedModule } from './shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    CommonHeaderComponent,
    SearchBarComponent,
    PrivateHeaderComponent,
    PublicHeaderComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    PrivateModule,
    SharedModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
