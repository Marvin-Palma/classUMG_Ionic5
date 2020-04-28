import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRecuperacionContrasenaPageRoutingModule } from './modal-recuperacion-contrasena-routing.module';

import { ModalRecuperacionContrasenaPage } from './modal-recuperacion-contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRecuperacionContrasenaPageRoutingModule
  ],
  declarations: [ModalRecuperacionContrasenaPage]
})
export class ModalRecuperacionContrasenaPageModule {}
