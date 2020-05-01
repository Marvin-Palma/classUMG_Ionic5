import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ModalController, LoadingController } from '@ionic/angular';
import { ModalAvatarsPage } from '../modal-avatars/modal-avatars.page';

import { CreateUserService } from '../../services/create-user/create-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  direccionAvatar:string;
  numeroImagen:any;
  respuesta:any;
  loading: any;

  usuario = {
    avatar:'',
    nombre:'',
    email: '',
    password: '',
    passwordConfirm:'',
    pregunta: '',
    respuestaPregunta:''
  }

  eye1:string="eye-outline";
  eye2:string="eye-outline";
  eye3:string="eye-outline";

  type1:string="password";
  type2:string="password";
  type3:string="password";

  constructor(private alertController: AlertController, private navController: NavController, private modalController: ModalController,
    private createUserService: CreateUserService, private loadingController:LoadingController) { }

  ngOnInit() {
    this.numeroImagen=Math.floor(Math.random() * (96 - 1)) + 1;
    this.direccionAvatar="../../../assets/svg/avatars/"+this.numeroImagen+".svg";
  }

  async cambiarAvatar(){
    const modal = await this.modalController.create({
      component: ModalAvatarsPage,
      cssClass: 'modalAvatars',
      componentProps: {
        avatar : this.numeroImagen
      }
    });

    await modal.present();

    const {data} = await modal.onDidDismiss();

    if(data!=undefined){
      this.direccionAvatar=data.avatar;
    }
  }

  crearCuenta(){
    this.usuario.avatar=this.direccionAvatar;
    if((this.usuario.nombre=='' || this.usuario.email=='' || this.usuario.password=='' || this.usuario.passwordConfirm=='')){
      this.presentAlert("Ingresa todos los campos.", "");
      return;
    }
    if(/^\w+([\.-]?\w+)*@miumg.edu.gt/.test(this.usuario.email)){
      if(this.usuario.password===this.usuario.passwordConfirm){
        if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/.test(this.usuario.password)){
          if(this.usuario.pregunta!=''){
            if(this.usuario.respuestaPregunta!=''){
        
              this.presentLoading( 'Espere...');
              this.createUserService.createUser(this.usuario).subscribe(res=>{
                this.loading.dismiss();
                this.respuesta=res;
                if(this.respuesta.status==true){
                  this.navController.navigateRoot('/slides-create-user');
                }else{
                  this.presentAlert(this.respuesta.mensaje, "¡Oye!");
                }
              });


            }else{
              this.presentAlert("Ingresa una respuesta a la pregunta de seguridad.", "¡Oye!");
            }
          }else{
            this.presentAlert("Selecciona una pregunta de seguridad.", "¡Hey!");
          }
        }else{
          this.presentAlert("Contraseña demasiado insegura, debe contener al menos una letra mayúscula, un número y 8 caracteres.", "¡Ups!");
        }
      }else{
        this.presentAlert("Las contraseñas no coinciden.", "¡Bah!");
      }
    }else{
      this.presentAlert("Recuerda, solo aceptamos correos con extensión @miumg.edu.gt", "¡Correo inválido!");
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

  async presentLoading( mensaje: string) {
    this.loading = await this.loadingController.create({
      mode:'ios',
      spinner:'bubbles',
      translucent: true,
      animated:true,
      message: mensaje,
      cssClass: 'loading'
    });
    await this.loading.present();
  }
}
