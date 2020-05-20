import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalAvatarsPage } from '../modal-avatars/modal-avatars.page';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/interfaces/interfaces';
import * as usuarioActions from '../../actions/usuario.actions';
import { Storage } from '@ionic/storage';

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
    private navController:NavController) {
    this.store.select('usuario').subscribe(usuario=>{
      this.avatar=usuario.avatar;
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
    }
  }
  
  configPassword(){
    this.cambiaPassword=this.cambiaPassword?false:true;
    this.flecha=this.cambiaPassword?"chevron-up-circle":"chevron-down-circle";
  }
  
  configPreguntasSeg(){
    this.cambiaPreguntas=this.cambiaPreguntas?false:true;
    this.flecha2=this.cambiaPreguntas?"chevron-up-circle":"chevron-down-circle";
  }
  
  guardarAvatarNombre(){
    // this.store.dispatch(usuarioActions.guardarDatosCompletos({usuario:this.avatar}));
  }

  guardarNuevaPassword(){

  }

  guardarNuevaPregunta(){
    
  }

  async cerrarSesion(){
    await this.storage.remove('jwt');
    this.store.dispatch(usuarioActions.borrarDatosCompletos());
    this.navController.navigateRoot('/login');
  }
}
