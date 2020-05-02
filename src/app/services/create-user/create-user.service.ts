import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http:HttpClient) { }

  createUser(usuario){

    return this.http.post(environment.apiURL+'/crearUsuario', usuario);
  }
}
