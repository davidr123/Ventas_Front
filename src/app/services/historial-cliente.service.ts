import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/Cliente.models';
const base_url= environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class HistorialClienteService {

  get token(){
    return localStorage.getItem('token') || '';
  }

  get headers(){

    return {headers:{
      'x-token':this.token
    }}
   }



  constructor(private http:HttpClient) { }


   ObtenerClientebyCedula(cedula:string){

//http://localhost:3002/api/historialcliente/000007
const url= `${base_url}/historialcliente/${cedula}`;
return this.http.get<any>(url, this.headers)
.pipe(
  map((resp:{ok:true, cliente:Cliente[]})=> resp.cliente)
)
  }




}
