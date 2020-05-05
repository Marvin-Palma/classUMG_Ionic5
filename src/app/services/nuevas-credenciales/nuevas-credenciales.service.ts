import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { environment } from '../../../environments/environment';

import { respuestaServidorNormal } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NuevasCredencialesService {

  jwt:any;
  constructor(private http:HttpClient, private storage:Storage) { 
    this.storage.get('jwt').then(res=>{
      this.jwt = res;
    });
  }

  nuevasCredencialesLogin(usuario){
    const headers = new HttpHeaders({
      'x-token': this.jwt
    });
    return this.http.post<respuestaServidorNormal>(environment.apiURL+'/nuevas-credenciales', usuario, {headers});
    
  }

}
