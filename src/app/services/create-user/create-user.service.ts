import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http:HttpClient) { }

  createUser(usuario){

    return this.http.post('http://localhost:3900/api/crearUsuario', usuario);
  }
}
