import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoUserPageRoutingModule } from './info-user-routing.module';

import { InfoUserPage } from './info-user.page';
import { ComponentsModule } from '../../components/components.module';
import { ModalAvatarsPage } from '../modal-avatars/modal-avatars.page';
import { ModalAvatarsPageModule } from '../modal-avatars/modal-avatars.module';

@NgModule({
  entryComponents:[
    ModalAvatarsPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoUserPageRoutingModule,
    ComponentsModule,
    ModalAvatarsPageModule
  ],
  declarations: [InfoUserPage]
})
export class InfoUserPageModule {}
