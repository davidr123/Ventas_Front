import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { Productos } from '../models/Productos.models';


const base_url= environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class ClienteService {



  get token(){
    return localStorage.getItem('token') || '';
  }

  get headers(){

    return {headers:{
      'x-token':this.token
    }}
   }

  constructor(private http:HttpClient) { }


  guardarcliente(data:{nombre:string, cedula:string, email:string, genero:string, direccion:string}){
    //http://localhost:3002/api/cliente/
    const url= `${base_url}/cliente/`;
    return this.http.post(url, data,  this.headers);

  }
}
