import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from '../../services/utility/utility.service';
import { NuevasCredencialesService } from '../../services/nuevas-credenciales/nuevas-credenciales.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  @Input() usuario;

  password:string='';
  passwordConfirm:string='';
  eye1:string="eye-outline";
  eye2:string="eye-outline";

  type1:string="password";
  type2:string="password";
  constructor(private utility: UtilityService, private nuevasCredencialesService: NuevasCredencialesService, private modalController:ModalController) { }

  ngOnInit() {
  }

  async login(){
    if((this.password=='' || this.passwordConfirm=='')) return this.utility.alertSimple('Información inválida', 'Ingresa todos los campos.', '');

    if(!(this.password==this.passwordConfirm)) return this.utility.alertSimple('Información inválida', 'Las contraseñas no coinciden.', '');
    
    if(!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/.test(this.password))) return this.utility.alertSimple('Información inválida', 'Contraseña demasiado insegura, debe contener al menos una letra mayúscula, un número y 8 caracteres.', '');
    
    var loading= await this.utility.iniciarLoading('Espera...');
    this.nuevasCredencialesService.nuevasCredencialesLogin({email:this.usuario+'@miumg.edu.gt', password:this.password}).subscribe( res=>{
      this.utility.terminarLoading(loading);

      if(res.codigo==200){
        this.utility.alertSimple('¡Hecho!', '¡Tu clave ha sido actualizada!', '');
        this.modalController.dismiss({
          actualizado: 'Actualizado',
          password: this.password
        });
      }else{
        this.utility.alertSimple('¡Ups!', '¡Error en el servidor!', `Código de error: ${res.codigo}`);
      }
    });
  }
}
