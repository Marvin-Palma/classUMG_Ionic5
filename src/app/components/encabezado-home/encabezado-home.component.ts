import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado-home',
  templateUrl: './encabezado-home.component.html',
  styleUrls: ['./encabezado-home.component.scss'],
})
export class EncabezadoHomeComponent implements OnInit {

  mensaje:string="Estamos empezando y queremos que esto nunca pare. Gracias por visitarnos. \n\nClassUMG Team. ";
  constructor() { }

  ngOnInit() {}

}
