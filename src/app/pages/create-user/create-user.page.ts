import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { ModalAvatarsPage } from '../modal-avatars/modal-avatars.page';

import { CreateUserService } from '../../services/create-user/create-user.service';
import { UtilityService } from '../../services/utility/utility.service';

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
    private createUserService: CreateUserService, private utilityService: UtilityService) { }

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

  async crearCuenta(){
    this.usuario.avatar=this.direccionAvatar;
    if((this.usuario.nombre=='' || this.usuario.email=='' || this.usuario.password=='' || this.usuario.passwordConfirm=='')){
      this.utilityService.alertSimple("Información inválida.", "", "Ingresa todos los campos.");
      return;
    }

    
    if(/^\w+([\.-]?\w+)*@miumg.edu.gt/.test(this.usuario.email)){
      if(this.usuario.password===this.usuario.passwordConfirm){
        if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/.test(this.usuario.password)){
          if(this.usuario.pregunta!=''){
            if(this.usuario.respuestaPregunta!=''){
              var loading = await this.utilityService.iniciarLoading('Espere...');
              this.createUserService.createUser(this.usuario).subscribe(res=>{
                this.utilityService.terminarLoading(loading);
                this.respuesta=res;
                if(this.respuesta.status==true){
                  this.navController.navigateRoot('/slides-create-user');
                }else if(this.respuesta.codigo==204){ //Email en uso 
                  this.utilityService.alertSimple("Información inválida", "¡Oye!", this.respuesta.mensaje);
                }else{
                  this.utilityService.alertSimple("Error!", "¡Ups!", 'Parece que algo ha salido mal, intenta más tarde.');
                }
              });
            }else{
              this.utilityService.alertSimple("Información inválida.", "¡Oye!", "Ingresa una respuesta a la pregunta de seguridad.");
            }
          }else{
            this.utilityService.alertSimple("Información inválida.", "¡Hey!", "Selecciona una pregunta de seguridad.");
          }
        }else{
          this.utilityService.alertSimple("Información inválida.", "¡Ups!", "Contraseña demasiado insegura, debe contener al menos una letra mayúscula, un número y 8 caracteres.");
        }
      }else{
        this.utilityService.alertSimple("Información inválida.", "¡Bah!", "Las contraseñas no coinciden.");
      }
    }else{
      this.utilityService.alertSimple("Información inválida.", "¡Correo inválido!", "Recuerda, solo aceptamos correos con extensión @miumg.edu.gt");
    }
  }
}
