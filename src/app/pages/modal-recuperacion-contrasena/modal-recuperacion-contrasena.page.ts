import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-recuperacion-contrasena',
  templateUrl: './modal-recuperacion-contrasena.page.html',
  styleUrls: ['./modal-recuperacion-contrasena.page.scss'],
})
export class ModalRecuperacionContrasenaPage implements OnInit {

  email:string;
  constructor(private alertController: AlertController, private modalController:ModalController) { }

  ngOnInit() {
  }

  recuperarPassword(){
    if(this.email==''){
      this.presentAlert("Ingresa tu correo universitario", "");
      return;
    }else if(/^\w+([\.-]?\w+)*@miumg.edu.gt/.test(this.email)){
      this.presentAlert("Hemos enviado tu contraseña temporal a tu correo, por favor verifícalo y haz Login con tu clave temporal.", "");
      this.modalController.dismiss();
      return;
    }else{
      this.presentAlert("Email inválido.", "");
      return;
    }
  }

  async presentAlert(mensaje, subtitulo) {
    const alert = await this.alertController.create({
      header: 'Información inválida',
      subHeader: subtitulo,
      message: mensaje,
      mode:'ios',
      backdropDismiss:false,
      buttons: [
        {
          text: 'OK'
        }
      ]
    });

    await alert.present();
  }

}
