import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides-create-user',
  templateUrl: './slides-create-user.page.html',
  styleUrls: ['./slides-create-user.page.scss'],
})
export class SlidesCreateUserPage implements OnInit {

  slides: { img: string, titulo: string, desc: string, desc2?:string, desc3?:string, desc4?:string }[] = [
    {
      img: '/assets/svg/unDraw/start.svg',
      titulo: '¡Ya casi!',
      desc: '¡Estamos preparando todo para ti! Necesitamos que confirmes tu dirección de correo.',
      desc3: '¡Hemos enviado un código a tu email, búscalo y copialo!',
      desc4:''
    },
    {
      img: '/assets/svg/unDraw/thinking.svg',
      titulo: '¿Cuál es el siguiente paso?',
      desc: 'Inicia sesión. Tu usuario será la primera parte de correo universitario. Un ejemplo, si tu correo es:',
      desc2:'estudiante1@miumg.edu.gt',
      desc3: 'Tu usuario para poder ingresar será:',
      desc4:'estudiante1'
    },
    {
      img: '/assets/svg/unDraw/profile.svg',
      titulo: '¿Y cómo confirmo mi correo?',
      desc: 'Al tratar de ingresar por primera vez te pediremos que ingreses el código que enviamos a tu email.',
      // desc2: 'estudiante1@miumg.edu.gt', 
      desc3: 'De esta manera aseguramos tu identidad. Y nadie podrá suplantarte, nos preocupamos por ti. ',
      // desc4: 'estudiante1'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
