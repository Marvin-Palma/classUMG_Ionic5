import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  private ejecutarQuery(query, body){
    return this.http.post(environment.apiURL+query, body);
  }

  login(usuario){
    return this.ejecutarQuery('/login', usuario);
    // return this.http.post('http://localhost:3900/api/login', usuario);
  }

  verificarEmail(usuario){
    return this.ejecutarQuery('/verificacion', usuario);
    // return this.http.post('http://localhost:3900/api/verificacion', usuario);
  }
}
