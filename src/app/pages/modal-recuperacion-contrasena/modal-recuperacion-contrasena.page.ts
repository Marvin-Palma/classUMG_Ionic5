import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { RecuperarPasswordService } from '../../services/recuperar-password/recuperar-password.service';
import { UtilityService } from '../../services/utility/utility.service';

@Component({
  selector: 'app-modal-recuperacion-contrasena',
  templateUrl: './modal-recuperacion-contrasena.page.html',
  styleUrls: ['./modal-recuperacion-contrasena.page.scss'],
})
export class ModalRecuperacionContrasenaPage implements OnInit {

  email:string;
  stepOne:Boolean;
  preguntaDeSeguridad:String;
  respuestaPreguntaDeSeguridad:String;

  eye: string = "eye-outline";
  type: string = "password";

  constructor(private alertController: AlertController, private modalController:ModalController, private recuperarPasswordService: RecuperarPasswordService, private utility:UtilityService) { 
    this.stepOne=true;
  }

  ngOnInit() {
  }

  async recuperarPasswordMethod(){

    if(this.email=='') return this.utility.alertSimple('Información inválida', 'Ingresa tu correo universitario', '');

    if(!(/^\w+([\.-]?\w+)*@miumg.edu.gt/.test(this.email))) return this.utility.alertSimple('Información inválida', 'Email inválido.', '');
    
    var loading= await this.utility.iniciarLoading('Espera...');
    this.recuperarPasswordService.recuperarPassword({opcion:'1', email:this.email}).subscribe(res=>{
      this.utility.terminarLoading(loading);
      
      if(res.codigo==202 || res.codigo==204) return this.utility.alertSimple('Información inválida', 'Email no encontrado.', 'Por favor verifica que tu email esté escrito correctamente');

      if(res.codigo==205) {
        this.modalController.dismiss();
        return this.utility.alertSimple('¡Espera...!', 'Ya hemos reseteado tu usuario, por favor valida tu email', '');
      } 
      
      if(res.codigo==200){
        //MOSTRAR PREGUNTA
        this.preguntaDeSeguridad=res.pregunta;
        this.stepOne=false; //Mostramos el nuevo apartado para ingresar la respuesta a la pregunta de seguridad
      }else{
        return this.utility.alertSimple('¡Ups!', 'Error del servidor, por favor intenta más tarde.', `Código de Error: ${res.codigo}`);
      }
    });
  }

  async verificarRespuestaDePregunta(){

    if(this.respuestaPreguntaDeSeguridad=='' || this.respuestaPreguntaDeSeguridad==null) return this.utility.alertSimple('Información inválida', 'Respuesta vacía.', '');

    var loading= await this.utility.iniciarLoading('Espera...');
    this.recuperarPasswordService.recuperarPassword({opcion:'2', email:this.email, respuestaPregunta:this.respuestaPreguntaDeSeguridad}).subscribe(res=>{
      this.utility.terminarLoading(loading);
      
      if(res.codigo==212) return this.utility.alertSimple('Parece que no eres tú...', 'Respuesta incorrecta', 'Por favor valida tu respuesta.');

      if(res.codigo==220){
        this.utility.alertSimple('¡Lo hemos resuelto!', 'Enviamos una clave provisional a tu email, inicia sesión.', '¡Nos vemos dentro!');
        this.modalController.dismiss();
      }else{
        return this.utility.alertSimple('¡Ups!', 'Error del servidor, por favor intenta más tarde.', `Código de Error: ${res.codigo}`);
      }
      
    });
  }

}
