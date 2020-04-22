import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAvatarsPage } from './modal-avatars.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAvatarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAvatarsPageRoutingModule {}
