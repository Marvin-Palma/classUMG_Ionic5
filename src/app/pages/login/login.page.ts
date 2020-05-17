import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalRecuperacionContrasenaPage } from '../modal-recuperacion-contrasena/modal-recuperacion-contrasena.page';
import { ResetPasswordPage } from '../reset-password/reset-password.page';

import { UtilityService } from '../../services/utility/utility.service';
import { LoginService } from '../../services/login/login.service';
import { ModalVerificacionEmailPage } from '../modal-verificacion-email/modal-verificacion-email.page';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  eye:string;
  tipoInput:string;
  data:any='';
  dataNuevasCrendenciales:any='';

  usuario={
    usuario:'',
    password:''
  }

  constructor(private modalController: ModalController, 
    private utilityService: UtilityService, 
    private loginService: LoginService, 
    private navController:NavController,
    private homeService:HomeService) { 

    this.eye="eye-outline";
    this.tipoInput="password";
  }

  ngOnInit(){
  }

  clickEye(){
    this.eye=="eye-outline"? this.eye="eye-off-outline": this.eye="eye-outline"
    this.tipoInput=="password"? this.tipoInput="text": this.tipoInput="password";
  }

  async modalLoginNuevasCredenciales(){
    const modal = await this.modalController.create({
      component: ResetPasswordPage,
      cssClass: 'modalRecuperarPassword',
      componentProps: {
        usuario : this.usuario.usuario
      }
    });

    await modal.present();

    this.dataNuevasCrendenciales = await modal.onDidDismiss();
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
      
      //Credenciales incorrectas
      if(res.codigo==201) return this.utilityService.alertSimple('Información inválida', '¡Ups!', 'Credenciales incorrectas.');
      //Usuario reseteado
      if(res.codigo==203) return this.utilityService.alertSimple('¡Hey!', '¡Parece que lo has olvidado!', 'Contraseña incorrecta, usuario reseteado, por favor valida tu email.');
      
      
      if(res.codigo==200){
        //HOME BIENVENIDO
        console.log("HEMOS HECHO LOGIN");
        this.navController.navigateRoot('/home');
      }else if(res.codigo==202){
        //INGRESA LAS NUEVAS CREDENCIALES
        await this.modalLoginNuevasCredenciales();

        if(this.dataNuevasCrendenciales.data.actualizado=='Actualizado'){
          this.usuario.password=this.dataNuevasCrendenciales.data.password;
          return this.login();
        }
      }else if(res.codigo==210){
        //INGRESA CÓDIGO DE VERIFICACIÓN
        await this.modalVerificacionEmail();

        if(this.data.autorizado="Autorizado"){
          return this.login();
        }
        
      }else{ 
        //ERROR DEL SERVIDOR
        this.utilityService.alertSimple("¡Ups!", "Error en el servidor, por favor intenta más tarde.", `Código de error: ${res.codigo}`);
      }
    });

  }

  invitadoLogin(){
    this.navController.navigateRoot('/home');
  }

}
