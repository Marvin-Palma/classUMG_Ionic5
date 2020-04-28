import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  password:string='';
  passwordConfirm:string='';
  eye1:string="eye-outline";
  eye2:string="eye-outline";

  type1:string="password";
  type2:string="password";
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  login(){
    if((this.password=='' || this.passwordConfirm=='')){
      this.presentAlert("Ingresa todos los campos.", "");
      return;
    }
    if(this.password==this.passwordConfirm){
      if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/.test(this.password)){
        this.presentAlert("Bienvenido", "");
      }else{
        this.presentAlert("Contraseña demasiado insegura, debe contener al menos una letra mayúscula, un número y 8 caracteres.", "¡Ups!");
      }
    }else{
      this.presentAlert("Las contraseñas no coinciden.", "");
      return;
    }
  }

  async presentAlert(mensaje, subtitulo) {
    const alert = await this.alertController.create({
      header: 'Información inválida',
      subHeader: subtitulo,
      message: mensaje,
      mode:'ios',
      buttons: [
        {
          text: 'OK'
        }
      ]
    });

    await alert.present();
  }
}
