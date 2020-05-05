import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { respuestaServidorRecuperarPassword } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RecuperarPasswordService {

  constructor( private http: HttpClient ) { }

  recuperarPassword(opciones){
    return this.http.post<respuestaServidorRecuperarPassword>(environment.apiURL+'/reseteo-password', opciones);
  }


}
