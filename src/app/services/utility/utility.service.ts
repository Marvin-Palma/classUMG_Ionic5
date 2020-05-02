import { Injectable } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  loading:any;

  constructor(private loadingController: LoadingController, private alertController:AlertController) { }

  ////////////////////////////////////////////        LOADING       ////////////////////////////////////////////////////////////
  iniciarLoading(mensaje){
    return this.presentLoading(mensaje);
  }
  private async presentLoading( mensaje: string) {
    this.loading = await this.loadingController.create({
      mode:'ios',
      spinner:'bubbles',
      translucent: true,
      animated:true,
      message: mensaje,
      cssClass: 'loading'
    });
    this.loading.present();
    return this.loading;
  }
  
  terminarLoading(loading){
    loading.dismiss();
  }
  ////////////////////////////////////////////         END-LOADING       ///////////////////////////////////////////////////////

  ////////////////////////////////////////////         ALERT             //////////////////////////////////////////////////////
  async alertSimple(header, subtitle, mensaje) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subtitle,
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
  ////////////////////////////////////////////         END-ALERT         //////////////////////////////////////////////////////
}
