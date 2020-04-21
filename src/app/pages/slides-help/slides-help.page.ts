import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides-help',
  templateUrl: './slides-help.page.html',
  styleUrls: ['./slides-help.page.scss'],
})
export class SlidesHelpPage implements OnInit {

  slides: { img: string, titulo: string, desc: string, desc2?:string, desc3?:string, desc4?:string }[] = [
    {
      img: '/assets/svg/unDraw/what.svg',
      titulo: '¿Qué es esto?',
      desc: '¡Bienvenido! Esta es la primera aplicación móvil de la Facultad de Ingeniería en Sistemas. Exactamente para el Centro Regional de Cuilapa, Santa Rosa.',
      
      desc3: 'Contamos con un apartado de información, foros, área de cursos y uno que otro apartado más. ¡Siéntete libre de entrar!',
      desc4:''
    },
    {
      img: '/assets/svg/unDraw/thinking.svg',
      titulo: '¿Inicio sesión con mi cuenta de la universidad?',
      desc: 'No, tendrás que crear una cuenta aquí, este es un servicio totalmente independiente, desarrollado por un estudiante.',
      desc2:'',
      desc3: 'Al crear la cuenta sí tendrás que utilizar tu correo de la universidad, ya que no admitiremos otra extensión de correo.',
      desc4:''
    },
    {
      img: '/assets/svg/unDraw/profile.svg',
      titulo: '¿Cuál es mi usuario si ya creé mi cuenta?',
      desc: 'Tu usuario será la primera parte de correo universitario. Un ejemplo, si tu correo es:',
      desc2: 'estudiante1@miumg.edu.gt', 
      desc3: 'Tu usuario para poder ingresar será:',
      desc4: 'estudiante1'
    },
    {
      img: '/assets/svg/unDraw/attention.svg',
      titulo: '¡Recuerda!',
      desc: 'Solo admitimos extensiones de correo de la universidad al crear tu cuenta, de esta manera sabremos quién eres en caso de un mal comportamiento dentro de ClassUMG.',
      
      desc3: 'Sé amable y sobre todo, ayuda a los demás.',
      desc4:''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
