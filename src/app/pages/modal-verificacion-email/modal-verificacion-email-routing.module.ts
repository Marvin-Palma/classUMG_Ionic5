import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVerificacionEmailPage } from './modal-verificacion-email.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVerificacionEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVerificacionEmailPageRoutingModule {}
