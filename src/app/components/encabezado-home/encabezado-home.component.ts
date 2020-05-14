import { Component, OnInit, Input } from '@angular/core';
import { EncabezadoHome } from '../../interfaces/interfaces';

@Component({
  selector: 'app-encabezado-home',
  templateUrl: './encabezado-home.component.html',
  styleUrls: ['./encabezado-home.component.scss'],
})
export class EncabezadoHomeComponent implements OnInit {

  @Input() encabezado:EncabezadoHome;

  constructor() { }

  ngOnInit() {
  }

}
