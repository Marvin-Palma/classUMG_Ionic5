import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, MenuController } from '@ionic/angular';
import { ModalAvatarsPage } from '../modal-avatars/modal-avatars.page';

import { CreateUserService } from '../../services/create-user/create-user.service';
import { UtilityService } from '../../services/utility/utility.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  direccionAvatar: string;
  numeroImagen: any;

  usuario = {
    avatar: '',
    nombre: '',
    email: '',
    password: '',
    passwordConfirm: '',
    pregunta: '',
    respuestaPregunta: ''
  }

  eye1: string = "eye-outline";
  eye2: string = "eye-outline";
  eye3: string = "eye-outline";

  type1: string = "password";
  type2: string = "password";
  type3: string = "password";

  constructor(
    private navController: NavController, 
    private modalController: ModalController,
    private createUserService: CreateUserService, 
    private utilityService: UtilityService,
    private menuController: MenuController
    ) { }

  ngOnInit() {
    this.numeroImagen = Math.floor(Math.random() * (96 - 1)) + 1;
    this.direccionAvatar = "../../../assets/svg/avatars/" + this.numeroImagen + ".svg";
    this.menuController.enable(false);
  }
  
  ngOnDestroy(){
    this.menuController.enable(true);
  }

  async cambiarAvatar() {
    const modal = await this.modalController.create({
      component: ModalAvatarsPage,
      cssClass: 'modalAvatars',
      componentProps: {
        avatar: this.numeroImagen
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    if (data != undefined) {
      this.direccionAvatar = data.avatar;
    }
  }

  async crearCuenta() {
    this.usuario.avatar = this.direccionAvatar.split("/", 10)[6].split(".", 2)[0];

    //Inicio de validaciones
    
    if ((this.usuario.nombre == '' || this.usuario.email == '' || this.usuario.password == '' || this.usuario.passwordConfirm == '' || this.usuario.pregunta=='' || this.usuario.respuestaPregunta == '')) return this.utilityService.alertSimple("Información inválida.", "", "Ingresa todos los campos.");
    
    if (!(/^\w+([\.-]?\w+)*@miumg.edu.gt/.test(this.usuario.email))) return this.utilityService.alertSimple("Información inválida.", "¡Correo inválido!", "Recuerda, solo aceptamos correos con extensión @miumg.edu.gt");
    
    if (this.usuario.password != this.usuario.passwordConfirm) return this.utilityService.alertSimple("Información inválida.", "¡Bah!", "Las contraseñas no coinciden.");
    
    if (!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/.test(this.usuario.password))) return this.utilityService.alertSimple("Información inválida.", "¡Ups!", "Contraseña demasiado insegura, debe contener al menos una letra mayúscula, un número y 8 caracteres.");
    
    if (this.usuario.pregunta == '') return this.utilityService.alertSimple("Información inválida.", "¡Hey!", "Selecciona una pregunta de seguridad.");
    
    if (this.usuario.respuestaPregunta == '') return this.utilityService.alertSimple("Información inválida.", "¡Oye!", "Ingresa una respuesta a la pregunta de seguridad.");
    
    //Fin de validaciones

    var loading = await this.utilityService.iniciarLoading('Espere...');
    this.createUserService.createUser(this.usuario).subscribe(res => {
      this.utilityService.terminarLoading(loading);
      if (res.status == true) {
        this.navController.navigateRoot('/slides-create-user');
      } else if (res.codigo == 204) { //Email en uso 
        this.utilityService.alertSimple("Información inválida", "¡Oye!", res.mensaje);
      } else {
        this.utilityService.alertSimple("Error!", "¡Ups!", 'Parece que algo ha salido mal, intenta más tarde.');
      }
    });

  }
}
