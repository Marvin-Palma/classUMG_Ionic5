import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAvatarsPageRoutingModule } from './modal-avatars-routing.module';

import { ModalAvatarsPage } from './modal-avatars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAvatarsPageRoutingModule
  ],
  declarations: [ModalAvatarsPage]
})
export class ModalAvatarsPageModule {}
