import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { respuestaServidorNormal } from '../../interfaces/interfaces';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http:HttpClient) { }

  createUser(usuario){

    return this.http.post<respuestaServidorNormal>(environment.apiURL+'/crearUsuario', usuario);
  }
}
