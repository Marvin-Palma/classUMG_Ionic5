import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { respuestaServidorNormal } from '../../interfaces/interfaces';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  res:any;
  constructor(private http:HttpClient, private storage:Storage) { }

  login(usuario){
    this.res = this.http.post<respuestaServidorNormal>(environment.apiURL+'/login', usuario);

    this.res.subscribe(res=>{
      if(res.codigo==200 || res.codigo==202){
        this.storage.set('jwt', res.jwt);
      }
    });
    return this.res;
  }

  verificarEmail(usuario){
    return this.http.post<respuestaServidorNormal>(environment.apiURL+'/verificacion', usuario);
  }
}

