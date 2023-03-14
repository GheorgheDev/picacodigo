import { CommonHeaderComponent } from './common-header/common-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateHeaderComponent } from './private-header/private-header.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PrivateHeaderComponent,
    PublicHeaderComponent,
    CommonHeaderComponent,
  ],
  imports: [
    CommonModule, 
    MatToolbarModule, 
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    PrivateHeaderComponent,
    PublicHeaderComponent,
    CommonHeaderComponent,
  ],
})
export class HeaderModule {}
