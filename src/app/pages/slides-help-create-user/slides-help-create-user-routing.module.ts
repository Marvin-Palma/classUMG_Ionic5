import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidesHelpCreateUserPage } from './slides-help-create-user.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesHelpCreateUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidesHelpCreateUserPageRoutingModule {}
