import { CommonHeaderComponent } from './common-header/common-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateHeaderComponent } from './private-header/private-header.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    PrivateHeaderComponent,
    PublicHeaderComponent,
    SearchBarComponent,
    CommonHeaderComponent,
  ],
  imports: [CommonModule, MatToolbarModule, MatMenuModule],
  exports: [
    PrivateHeaderComponent,
    PublicHeaderComponent,
    SearchBarComponent,
    CommonHeaderComponent,
  ],
})
export class HeaderModule {}
