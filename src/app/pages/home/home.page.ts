import { Component, OnInit } from '@angular/core';
import { EncabezadoHome, NoticiaHome } from '../../interfaces/interfaces';
import { HomeService } from '../../services/home/home.service';

import { Store } from '@ngrx/store';
import * as usuarioActions from '../../actions/usuario.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  encabezadoPorEnviar:EncabezadoHome={
    titulo:'Bienvenido a ClassUMG!!!',
    contenido: 'Estamos empezando y queremos que esto nunca pare. Gracias por visitarnos. \n\n ClassUMG Team.',
    imagenes:[{
      url:'../../../assets/svg/unDraw/404.svg'
    }]
  };

  noticiaPorEnviar:NoticiaHome={
    titulo:'Título de noticia',
    subtitulo: 'Subtítulo de noticia',
    contenido: 'Contenido de noticia',
    imagenes: [
      {
        image:'../../../assets/svg/unDraw/404.svg'
      },
      {
        image:'../../../assets/svg/unDraw/art.svg'
      },
      {
        image:'../../../assets/svg/unDraw/hi.svg'
      }
    ]
  };
  
  constructor(private homeService:HomeService, private store:Store) { 
  }
  
  ionViewWillEnter(){
    console.log("INICIA HOME");
    this.homeService.obtenerInfoUsuario().then(res=>{
      console.log(res);
      res.subscribe(async res=>{
        if(res.mensaje!='Token inválido.'){
          this.store.dispatch(usuarioActions.guardarDatosCompletos({usuario:res.mensaje}));
        }
      });
    });
  }

  ngOnInit() {
  }

}
