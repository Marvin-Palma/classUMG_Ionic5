import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVerificacionEmailPageRoutingModule } from './modal-verificacion-email-routing.module';

import { ModalVerificacionEmailPage } from './modal-verificacion-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVerificacionEmailPageRoutingModule
  ],
  declarations: [ModalVerificacionEmailPage]
})
export class ModalVerificacionEmailPageModule {}
