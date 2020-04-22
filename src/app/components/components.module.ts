import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './input/input.component';
import { IonicModule } from '@ionic/angular';
import { PopoverCreateUserComponent } from './popover-create-user/popover-create-user.component';


@NgModule({
  declarations: [
    InputComponent,
    PopoverCreateUserComponent
  ],
  exports:[
    InputComponent,
    PopoverCreateUserComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
