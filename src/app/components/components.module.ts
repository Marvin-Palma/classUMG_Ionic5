import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { VersionModalPage } from '../pages/version-modal/version-modal.page';
import { VersionModalPageModule } from '../pages/version-modal/version-modal.module';
import { EncabezadoHomeComponent } from './encabezado-home/encabezado-home.component';


@NgModule({
  entryComponents:[
    VersionModalPage
  ],
  declarations: [
    ToolbarComponent,
    TabsComponent,
    EncabezadoHomeComponent
  ],
  exports:[
    ToolbarComponent,
    TabsComponent,
    EncabezadoHomeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    VersionModalPageModule
  ]
})
export class ComponentsModule { }
