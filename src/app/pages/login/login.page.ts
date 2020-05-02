import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalRecuperacionContrasenaPage } from '../modal-recuperacion-contrasena/modal-recuperacion-contrasena.page';
import { ResetPasswordPage } from '../reset-password/reset-password.page';

import { UtilityService } from '../../services/utility/utility.service';
import { LoginService } from '../../services/login/login.service';
import { ModalVerificacionEmailPage } from '../modal-verificacion-email/modal-verificacion-email.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  eye:string;
  tipoInput:string;
  respuesta:any;
  data:any='';

  usuario={
    usuario:'',
    password:''
  }

  constructor(private modalController: ModalController, private utilityService: UtilityService, private loginService: LoginService) { 
    this.eye="eye-outline";
    this.tipoInput="password";
  }

  ngOnInit() {
  }

  clickEye(){
    this.eye=="eye-outline"? this.eye="eye-off-outline": this.eye="eye-outline"
    this.tipoInput=="password"? this.tipoInput="text": this.tipoInput="password";
  }

  async modalLoginNuevasCredenciales(){
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

  async modalVerificacionEmail(){
    const modal = await this.modalController.create({
      component: ModalVerificacionEmailPage,
      cssClass: 'modalVerificacionEmail',
      componentProps: {
        usuario : this.usuario.usuario
      }
    });

    await modal.present();

    this.data = await modal.onDidDismiss();
  }

  async login(){

    //Inicio de validaciones
    
    if(this.usuario.usuario=='') return this.utilityService.alertSimple('Información inválida', '¡Hey!', 'Ingresa tu usuario.');
    if(this.usuario.password=='') return this.utilityService.alertSimple('Información inválida', '¡Hey!', 'Ingresa tu contraseña.');
    
    //Fin de validaciones

    var loading = await this.utilityService.iniciarLoading("Espere...");
    this.loginService.login(this.usuario).subscribe(async res=>{
      this.utilityService.terminarLoading(loading);
      this.respuesta=res;
      
      //Credenciales incorrectas
      if(this.respuesta.codigo==201) return this.utilityService.alertSimple('Información inválida', '¡Ups!', 'Credenciales incorrectas.');
      //Usuario reseteado
      if(this.respuesta.codigo==203) return this.utilityService.alertSimple('Encontramos algo para ti', '¡Hey!', 'Contraseña incorrecta, usuario reseteado, por favor valida tu email.');
      
      
      if(this.respuesta.codigo==200){
        //HOME BIENVENIDO
        console.log("HEMOS HECHO LOGIN");
      }else if(this.respuesta.codigo==202){
        //INGRESA LAS NUEVAS CREDENCIALES
      }else if(this.respuesta.codigo==210){
        //INGRESA CÓDIGO DE VERIFICACIÓN
        await this.modalVerificacionEmail();

        if(this.data.autorizado="Autorizado"){
          return this.login();
        }
        
      }else{ 
        //ERROR DEL SERVIDOR
        this.utilityService.alertSimple("Error!", "¡Ups!", 'Parece que algo ha salido mal, intenta más tarde.');
      }
    });

  }

}
