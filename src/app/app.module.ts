import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateModule } from './private/private.module';
import { PublicModule } from './public/public.module';
import { PrivateSharedModule } from './shared/private-shared/private-shared.module';
import { PublicSharedModule } from './shared/public-shared/public-shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonHeaderComponent } from './shared/public-shared/header/common-header/common-header.component';
import { SearchBarComponent } from './shared/public-shared/header/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { PrivateHeaderComponent } from './shared/public-shared/header/private-header/private-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { PublicHeaderComponent } from './shared/public-shared/header/public-header/public-header.component';
import { MatCardModule } from '@angular/material/card';
import { MyProfilePrivComponent } from './private/my-profile-priv/my-profile-priv.component';
import { MyProfilePublComponent } from './public/my-profile-publ/my-profile-publ.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonHeaderComponent,
    SearchBarComponent,
    PrivateHeaderComponent,
    PublicHeaderComponent,
    MyProfilePrivComponent,
    MyProfilePublComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    PrivateModule,
    PrivateSharedModule,
    PublicSharedModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
