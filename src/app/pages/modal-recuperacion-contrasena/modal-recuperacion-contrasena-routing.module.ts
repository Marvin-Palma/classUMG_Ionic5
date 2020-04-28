import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRecuperacionContrasenaPage } from './modal-recuperacion-contrasena.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRecuperacionContrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRecuperacionContrasenaPageRoutingModule {}
