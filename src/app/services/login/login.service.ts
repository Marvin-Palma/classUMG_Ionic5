import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { respuestaServidorNormal } from '../../interfaces/interfaces';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(usuario){
    return this.http.post<respuestaServidorNormal>(environment.apiURL+'/login', usuario);
  }

  verificarEmail(usuario){
    return this.http.post<respuestaServidorNormal>(environment.apiURL+'/verificacion', usuario);
  }
}

