import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
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


public clienteactuaizado: EventEmitter<Cliente>= new EventEmitter<Cliente>();

public cliente: EventEmitter<Cliente>= new EventEmitter<Cliente>();

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
      map((resp: {ok:true, cliente:Cliente[]})=>resp.cliente)
    
    );
    
    
    
      }
    


     actualizarcliente(cliente:Cliente){
       //http://localhost:3002/api/cliente/6248ab2f088321f4b46fc307
       const url = `${base_url}/cliente/${cliente._id}`;
       return this.http.put(url, cliente, this.headers);
      //  .pipe(
      //    map(resp=>{
      //      const clienteactualizado = resp.clientes.map(cliente=> 
      //       new Cliente(cliente.nombre, cliente.cedula, cliente.email, cliente.genero, cliente.direccion,
      //         cliente.uid))

      //         return{
      //           ok:true,
      //           clienteactualizado
      //         }
      //    })
      //  )
     }



     mostrarclinetebyid(id:string){
//http://localhost:3002/api/cliente/624e578913e24daad836631f
       const url=`${base_url}/cliente/${id}`;
       return this.http.get<any>(url, this.headers)
       .pipe(
         map((resp:{ok: boolean, cliente:Cliente})=> resp.cliente)
       )
     }


     mostrarcliente(){
      const url=`${base_url}/cliente`;
      return this.http.get<ClienteInterface>(url, this.headers)
      .pipe(
        map(resp=>{
        const  cliente= resp.cliente.map( cli=>new Cliente( cli._id, cli.nombre, cli.cedula, cli.email, cli.direccion, cli.genero, cli.vendedor)
          );
  return{
    ok:resp.ok,
    cliente
  }
       
        })
        
      )
     }


     BorrarCliente(id:string){

      //http://localhost:3002/api/cliente/62449eb4e04a997c483182ae
      const url=`${base_url}/cliente/${id}`;
      return this.http.delete(url, this.headers);

     }


}
