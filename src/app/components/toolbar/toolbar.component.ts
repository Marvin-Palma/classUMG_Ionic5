import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { VersionModalPage } from '../../pages/version-modal/version-modal.page';
import { Store } from '@ngrx/store';
import { appState } from '../../interfaces/interfaces';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  avatarDir='';
  constructor(private menuController:MenuController, 
    private modalController:ModalController, 
    private navController:NavController,
    private store: Store<appState>
    ) { 
      this.store.select('usuario').subscribe(usuario=>this.avatarDir=usuario.avatar);
    }

  ngOnInit() {
    console.log("Entra");
    this.menuController.enable(true);
  }
  
  ngOnDestroy(){
    console.log("Sale");
    this.menuController.enable(false);
  }

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

  crearCuenta(){
    this.navController.navigateRoot('/login');
    this.navController.navigateForward('/create-user');
  }

}
