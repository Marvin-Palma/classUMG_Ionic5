import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidesHelpPageRoutingModule } from './slides-help-routing.module';

import { SlidesHelpPage } from './slides-help.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidesHelpPageRoutingModule
  ],
  declarations: [SlidesHelpPage]
})
export class SlidesHelpPageModule {}
