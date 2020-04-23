import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides-help-create-user',
  templateUrl: './slides-help-create-user.page.html',
  styleUrls: ['./slides-help-create-user.page.scss'],
})
export class SlidesHelpCreateUserPage implements OnInit {

  slides: { img: string, titulo: string, desc: string, desc2?:string, desc3?:string, desc4?:string }[] = [
    {
      img: '/assets/svg/unDraw/avatar.svg',
      titulo: '¡Elegí el avatar que más te identifique!',
      desc: '¡Bienvenido! Siéntete cómodo, tómate un tiempo para elegir lo que más te guste.',
      
      desc3: 'Nos gustará tenerte por aquí, pero también queremos que a tí te guste estar aquí. ¡Es un ganar y ganar!',
      desc4:''
    },
    {
      img: '/assets/svg/unDraw/art.svg',
      titulo: 'Nuestras recomendaciones',
      desc: 'Elige un nickname que tenga relación a tu nombre, algo por lo que te podamos conocer.',
      desc2:'',
      desc3: 'Recuerda, sabremos quién eres en la vida real, podremos identificarte con tu correo, sé tú mismo, pero no te pases.',
      desc4:''
    },
    {
      img: '/assets/svg/unDraw/avatarProfile.svg',
      titulo: '¡Atención!',
      desc: 'Tu nickname no será tu usuario para ingresar a la aplicación. Este solo servirá para tener un nombre dentro de ClassUMG.',
      desc2: '', 
      desc3: '¡Vamos, más adelante te explicaremos todo! De momento, veamos cómo te identificas.',
      desc4: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
