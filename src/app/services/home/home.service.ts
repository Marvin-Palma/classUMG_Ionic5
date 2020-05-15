import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { environment } from '../../../environments/environment';

import { respuestaServidorNormal } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  jwt:any;
  constructor(private http:HttpClient, private storage:Storage) { 
    
  }

  async obtenerInfoUsuario(){
    await this.storage.get('jwt').then(res=>{
      if(res!=null){
        this.jwt = res;
      }else{
        this.jwt = "tokenInvalido";
      }
    });
    const headers = await new HttpHeaders({
      'x-token': this.jwt
    });

    return this.http.post<respuestaServidorNormal>(environment.apiURL+'/info-usuario', this.jwt, {headers});
    
  }

}

