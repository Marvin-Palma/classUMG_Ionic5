import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateUserPageRoutingModule } from './create-user-routing.module';

import { CreateUserPage } from './create-user.page';
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
    CreateUserPageRoutingModule,
    ModalAvatarsPageModule
  ],
  declarations: [CreateUserPage]
})
export class CreateUserPageModule {}
