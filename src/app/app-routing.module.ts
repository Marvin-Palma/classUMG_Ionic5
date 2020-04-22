import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'slides-help',
    loadChildren: () => import('./pages/slides-help/slides-help.module').then( m => m.SlidesHelpPageModule)
  },
  {
    path: 'create-user',
    loadChildren: () => import('./pages/create-user/create-user.module').then( m => m.CreateUserPageModule)
  },
  {
    path: 'slides-create-user',
    loadChildren: () => import('./pages/slides-create-user/slides-create-user.module').then( m => m.SlidesCreateUserPageModule)
  },
  {
    path: 'modal-avatars',
    loadChildren: () => import('./pages/modal-avatars/modal-avatars.module').then( m => m.ModalAvatarsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
