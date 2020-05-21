import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { respuestaServidorNormal } from '../../interfaces/interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfoUserService {

  private jwt:any;
  constructor(private http:HttpClient, private storage:Storage) { 
    this.storage.get('jwt').then(res=>{
      this.jwt = res;
    });
  }

  cambiarNombreAvatar(usuario){
    const headers = new HttpHeaders({
      'x-token': this.jwt
    });
    return this.http.post<respuestaServidorNormal>(environment.apiURL+'/cambio-nombre-avatar', usuario, {headers});
  }

  cambioPassword(usuario){
    const headers = new HttpHeaders({
      'x-token': this.jwt
    });
    return this.http.post<respuestaServidorNormal>(environment.apiURL+'/cambio-password', usuario, {headers});
  }

  cambioPregunta(usuario){
    const headers = new HttpHeaders({
      'x-token': this.jwt
    });
    return this.http.post<respuestaServidorNormal>(environment.apiURL+'/cambio-pregunta', usuario, {headers});
  }

}
