import { Component, OnInit } from '@angular/core';
import { EncabezadoHome, NoticiaHome } from '../../interfaces/interfaces';

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
  
  constructor() { }

  ngOnInit() {
  }

}
