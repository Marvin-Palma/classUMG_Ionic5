import { Component, OnInit, Input } from '@angular/core';
import { NoticiaHome } from '../../interfaces/interfaces';

@Component({
  selector: 'app-noticia-home',
  templateUrl: './noticia-home.component.html',
  styleUrls: ['./noticia-home.component.scss'],
})
export class NoticiaHomeComponent implements OnInit {

  @Input() noticia:NoticiaHome;

  constructor() {
  }

  ngOnInit() {}

}
