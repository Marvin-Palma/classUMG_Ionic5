import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { VersionModalPage } from '../pages/version-modal/version-modal.page';
import { VersionModalPageModule } from '../pages/version-modal/version-modal.module';
import { EncabezadoHomeComponent } from './encabezado-home/encabezado-home.component';
import { SeccionesHomeComponent } from './secciones-home/secciones-home.component';
import { NoticiaHomeComponent } from './noticia-home/noticia-home.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  entryComponents:[
    VersionModalPage
  ],
  declarations: [
    ToolbarComponent,
    TabsComponent,
    EncabezadoHomeComponent,
    SeccionesHomeComponent,
    NoticiaHomeComponent
  ],
  exports:[
    ToolbarComponent,
    TabsComponent,
    EncabezadoHomeComponent,
    SeccionesHomeComponent,
    NoticiaHomeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    VersionModalPageModule,
    PipesModule
  ]
})
export class ComponentsModule { }
