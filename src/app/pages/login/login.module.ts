import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ModalRecuperacionContrasenaPage } from '../modal-recuperacion-contrasena/modal-recuperacion-contrasena.page';
import { ModalRecuperacionContrasenaPageModule } from '../modal-recuperacion-contrasena/modal-recuperacion-contrasena.module';
import { ResetPasswordPage } from '../reset-password/reset-password.page';
import { ResetPasswordPageModule } from '../reset-password/reset-password.module';
import { ModalVerificacionEmailPage } from '../modal-verificacion-email/modal-verificacion-email.page';
import { ModalVerificacionEmailPageModule } from '../modal-verificacion-email/modal-verificacion-email.module';

@NgModule({
  entryComponents:[
    ModalRecuperacionContrasenaPage,
    ModalVerificacionEmailPage,
    ResetPasswordPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ComponentsModule,
    ModalRecuperacionContrasenaPageModule,
    ModalVerificacionEmailPageModule,
    ResetPasswordPageModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
