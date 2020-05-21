import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalAvatarsPage } from '../modal-avatars/modal-avatars.page';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/interfaces/interfaces';
import * as usuarioActions from '../../actions/usuario.actions';
import { Storage } from '@ionic/storage';
import { InfoUserService } from '../../services/info-user/info-user.service';
import { UtilityService } from '../../services/utility/utility.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.page.html',
  styleUrls: ['./info-user.page.scss'],
})
export class InfoUserPage implements OnInit {

  avatar:any;
  direccionAvatar:any;
  stars:any;
  cambiaPassword:boolean=false;
  cambiaPreguntas:boolean=false;
  flecha="chevron-down-circle";
  flecha2="chevron-down-circle";

  clasePassword='contents ion-padding animate__animated animate__backInDown';
  clasePreguntas='contents ion-padding animate__animated animate__backInDown';

  eye1: string = "eye-outline";
  eye2: string = "eye-outline";
  eye3: string = "eye-outline";

  type1: string = "password";
  type2: string = "password";
  type3: string = "password";

  usuario = {
    avatar: '',
    nombre: '',
    email: '',
    password: '',
    passwordConfirm: '',
    pregunta: '',
    respuestaPregunta: ''
  }

  constructor(
    private modalController:ModalController,
    private store:Store<appState>,
    private storage:Storage,
    private navController:NavController,
    private infoUserService:InfoUserService,
    private utility:UtilityService) {
    this.store.select('usuario').subscribe(usuario=>{
      this.avatar=usuario.avatar;
      this.usuario.email=usuario.email;
      this.usuario.avatar=usuario.avatar;
      this.usuario.nombre=usuario.nombre;
      this.stars=usuario.stars;
      this.usuario.pregunta=usuario.preguntaSeguridad;
    });
  }

  ngOnInit() {
    this.direccionAvatar = "../../../assets/svg/avatars/" + this.avatar + ".svg";
  }

  async cambiarAvatar() {
    const modal = await this.modalController.create({
      component: ModalAvatarsPage,
      cssClass: 'modalAvatars'
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    if (data != undefined) {
      this.direccionAvatar = data.avatar;
      this.avatar = this.direccionAvatar.split("/", 10)[6].split(".", 2)[0];
      this.usuario.avatar=this.avatar;
    }
  }
  
  configPassword(){

    var time=!this.cambiaPassword?0:500;

    this.clasePassword=!this.cambiaPassword?'contents ion-padding animate__animated animate__backInDown':'contents ion-padding animate__animated animate__backOutDown';
    
    setTimeout(()=> {
      this.cambiaPassword=this.cambiaPassword?false:true;
      this.flecha=this.cambiaPassword?"chevron-up-circle":"chevron-down-circle";
    }, time);
  }
  
  configPreguntasSeg(){

    var time=!this.cambiaPreguntas?0:500;

    this.clasePreguntas=!this.cambiaPreguntas?'contents ion-padding animate__animated animate__backInDown':'contents ion-padding animate__animated animate__backOutDown';

    setTimeout(()=>{
      this.cambiaPreguntas=this.cambiaPreguntas?false:true;
      this.flecha2=this.cambiaPreguntas?"chevron-up-circle":"chevron-down-circle";
    }, time);
  }
  
  async guardarAvatarNombre(){

    if (this.usuario.nombre.trim() == '') return this.utility.alertSimple("Información inválida.", "", "Ingresa un nombre.");

    var loading= await this.utility.iniciarLoading('Espera...');
    this.infoUserService.cambiarNombreAvatar(this.usuario).subscribe(res=>{
      this.utility.terminarLoading(loading);

      var user={nombre:res.mensaje.nombre, email:res.mensaje.email, avatar:res.mensaje.avatar, stars:res.mensaje.stars, preguntaSeguridad:res.mensaje.pregunta};

      this.store.dispatch(usuarioActions.guardarDatosCompletos({usuario:user}));

      this.utility.alertSimple("Cambio realizado con éxito.", "", "Disfruta tu nueva apariencia!!!");
    });
  }

  async guardarNuevaPassword(){

    if ((this.usuario.password.trim() == '' || this.usuario.passwordConfirm.trim() == '')) return this.utility.alertSimple("Información inválida.", "", "Ingresa tu nueva contraseña y confírmala.");

    if (this.usuario.password != this.usuario.passwordConfirm) return this.utility.alertSimple("Información inválida.", "¡Bah!", "Las contraseñas no coinciden.");

    if (!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/.test(this.usuario.password))) return this.utility.alertSimple("Información inválida.", "¡Ups!", "Contraseña demasiado insegura, debe contener al menos una letra mayúscula, un número y 8 caracteres.");

    var loading= await this.utility.iniciarLoading('Espera...');
    this.infoUserService.cambioPassword(this.usuario).subscribe(res=>{
      this.utility.terminarLoading(loading);
      if(res.mensaje=="Credenciales actualizadas con éxito."){
        this.usuario.password='';
        this.usuario.passwordConfirm='';
        this.utility.alertSimple("Cambio realizado con éxito.", "", "Credenciales actualizadas!!!");
      }else{
        this.utility.alertSimple("Ups!!!", "", "Parece que algo salió mal, intenta más tarde.");
      }


    });
  }

  async guardarNuevaPregunta(){
    
    if (this.usuario.pregunta == '') return this.utility.alertSimple("Información inválida.", "¡Hey!", "Selecciona una pregunta de seguridad.");
    
    if (this.usuario.respuestaPregunta == '') return this.utility.alertSimple("Información inválida.", "¡Oye!", "Ingresa una respuesta a la pregunta de seguridad.");

    var loading= await this.utility.iniciarLoading('Espera...');
    this.infoUserService.cambioPregunta(this.usuario).subscribe(res=>{
      this.utility.terminarLoading(loading);

      if(res.mensaje=="Preguntas actualizadas con éxito."){
        var user={nombre:res.usuario.nombre, email:res.usuario.email, avatar:res.usuario.avatar, stars:res.usuario.stars, preguntaSeguridad:res.usuario.pregunta};
  
        this.usuario.respuestaPregunta='';

        this.store.dispatch(usuarioActions.guardarDatosCompletos({usuario:user}));
  
        this.utility.alertSimple("Cambio realizado con éxito.", "", "Pregunta actualizada!!!");

      }else{
        this.utility.alertSimple("Ups!!!", "", "Parece que algo salió mal, intenta más tarde.");
      }


    });
    
  }

  async cerrarSesion(){
    await this.storage.remove('jwt');
    this.store.dispatch(usuarioActions.borrarDatosCompletos());
    this.navController.navigateRoot('/login');
  }
}
