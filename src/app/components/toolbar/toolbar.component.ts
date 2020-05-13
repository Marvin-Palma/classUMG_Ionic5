import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { VersionModalPage } from '../../pages/version-modal/version-modal.page';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  constructor(private menuController:MenuController, private modalController:ModalController, private navController:NavController) { }

  ngOnInit() {}

  async modalVersion(){
    const modal = await this.modalController.create({
      component: VersionModalPage,
      cssClass: 'modalCuadrado',
    });

    await modal.present();
  }

  modalVersion2(){
    this.navController.navigateForward('/version-modal');
    
  }

  toggleMenu(){
    this.menuController.toggle();
  }

}
