import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidesHelpCreateUserPageRoutingModule } from './slides-help-create-user-routing.module';

import { SlidesHelpCreateUserPage } from './slides-help-create-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidesHelpCreateUserPageRoutingModule
  ],
  declarations: [SlidesHelpCreateUserPage]
})
export class SlidesHelpCreateUserPageModule {}
