import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente, appState } from '../../interfaces/interfaces';
import { DataServiceService } from '../../services/data-service.service';
import { Store } from '@ngrx/store';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  nombre='';
  correo='';
  avatar='';
  components:Observable<Componente[]>;
  
  constructor(
    private dataService:DataServiceService,
    private store:Store<appState>,
    private navController:NavController,
    private menuController:MenuController
    ) { 
    this.components = this.dataService.getMenu();
    this.store.select('usuario').subscribe(usuario=>{
      this.avatar=usuario.avatar;
      this.nombre=usuario.nombre;
      this.correo=usuario.email;
    });
  }

  ngOnInit() {}

  crearCuenta(){
    this.navController.navigateRoot('/login');
    this.navController.navigateForward('/create-user');
    this.menuController.toggle();
  }
  
  infoUser(){
    this.navController.navigateForward('/info-user');
    this.menuController.toggle();
  }

}
