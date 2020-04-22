import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidesCreateUserPage } from './slides-create-user.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesCreateUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidesCreateUserPageRoutingModule {}
