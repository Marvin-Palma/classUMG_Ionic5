import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from '../../services/utility/utility.service';
import { LoginService } from '../../services/login/login.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-verificacion-email',
  templateUrl: './modal-verificacion-email.page.html',
  styleUrls: ['./modal-verificacion-email.page.scss'],
})
export class ModalVerificacionEmailPage implements OnInit {

  @Input() usuario;

  datosVerificacion = {
    email:'',
    codigo:''
  }

  constructor(private utilityService: UtilityService, private loginService:LoginService, private modalController:ModalController) { }

  ngOnInit() {
  }

  async validarCodigo(){
    if(this.datosVerificacion.codigo=='' || this.datosVerificacion.codigo==null) return this.utilityService.alertSimple('Información inválida', '¡Hey!', 'Ingresa tu código de verificación');

    this.datosVerificacion.email=this.usuario+'@miumg.edu.gt';
    this.datosVerificacion.codigo=this.datosVerificacion.codigo.toString();
    var loading = await this.utilityService.iniciarLoading("Espere...");
    this.loginService.verificarEmail(this.datosVerificacion).subscribe(res=>{
      this.utilityService.terminarLoading(loading);

      if(res.codigo==201) return this.utilityService.alertSimple('Información inválida', '¡Ups!', 'No encontramos tu email.');
      
      if(res.codigo==204){
        this.datosVerificacion.codigo='';
        return this.utilityService.alertSimple('Información inválida', '¡Hey!', 'Código de validación incorrecto.');
      } 
      
      if(res.codigo==200){
        //Autorizado
        this.modalController.dismiss({
          autorizado: 'Autorizado' 
        });
      }else{
        return this.utilityService.alertSimple('Error del servidor', '¡Ups!', 'Por favor, intenta más tarde.');
      }
    });

  }
}
