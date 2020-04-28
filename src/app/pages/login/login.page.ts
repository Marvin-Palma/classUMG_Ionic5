import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalRecuperacionContrasenaPage } from '../modal-recuperacion-contrasena/modal-recuperacion-contrasena.page';
import { ResetPasswordPage } from '../reset-password/reset-password.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  eye:string;
  tipoInput:string;
  constructor(private modalController: ModalController) { 
    this.eye="eye-outline";
    this.tipoInput="password";
  }

  ngOnInit() {
  }

  clickEye(){
    this.eye=="eye-outline"? this.eye="eye-off-outline": this.eye="eye-outline"
    this.tipoInput=="password"? this.tipoInput="text": this.tipoInput="password";
  }

  async resetPassword(){
    const modal = await this.modalController.create({
      component: ResetPasswordPage,
      cssClass: 'modalRecuperarPassword'
    });

    await modal.present();

    const {data} = await modal.onDidDismiss();
  }

  async recuperarPassword(){
    const modal = await this.modalController.create({
      component: ModalRecuperacionContrasenaPage,
      cssClass: 'modalRecuperarPassword'
    });

    await modal.present();
  }

}
