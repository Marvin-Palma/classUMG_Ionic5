import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidesCreateUserPageRoutingModule } from './slides-create-user-routing.module';

import { SlidesCreateUserPage } from './slides-create-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidesCreateUserPageRoutingModule
  ],
  declarations: [SlidesCreateUserPage]
})
export class SlidesCreateUserPageModule {}
