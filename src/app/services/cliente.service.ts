import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ClienteInterface } from '../interfaces/cliente.interface';
import { Cliente } from '../models/Cliente.models';

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

    const url= `${base_url}/cliente/`;
    return this.http.post(url, data,  this.headers);

  }

  mostrarclientebycedula(cedula:string){
//http://localhost:3002/api/cliente/0909890
const url = `${base_url}/cliente/${cedula}`;
return this.http.get<ClienteInterface>(url, this.headers)
.pipe(
  map(resp=>{
    const client= resp.clientes.map( cli=> 
      new Cliente(cli.nombre, cli.cedula, cli.email, cli.genero, cli.direccion, cli.uid))

      return{
        ok:true,
        client
      }
  })

);



  }



     actualizarcliente(cliente:Cliente){
       //http://localhost:3002/api/cliente/6248ab2f088321f4b46fc307
       const url = `${base_url}/cliente/${cliente.uid}`;
       return this.http.put(url, this.headers);
     }
}
