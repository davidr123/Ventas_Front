import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginVendedor } from '../interfaces/loginvendedor.interface';
import { VendedorInterface } from '../interfaces/vendedor.interface';
import { Vendedor } from '../models/vendedor.models';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class VendedorService {


  public vendedor!:Vendedor
  get Token(){
    return localStorage.getItem('token')|| '';
      }

      get headers(){

       return {headers:{
         'x-token':this.Token
       }}
      }



  constructor(private http:HttpClient) { }



  validarToken(): Observable<boolean>{
  const token = localStorage.getItem('token') || '';

  const url= `${base_url}/login/renew`;
  return this.http.get(url,{
    headers:{
      'x-token':token
    }
  }).pipe(
    tap((resp:any)=>{
 
        const {usuario, cedula, email, genero, direccion, img, uid}= resp.vendedor;
      this.vendedor= new Vendedor(usuario, '', cedula, email, genero, direccion, img, uid)
      console.log(resp);
      localStorage.setItem('token', resp.token);
      
    }),
   map(resp=>true),
     catchError(err=>of(false))
  );
  }




loginVendedor(data:LoginVendedor){

 // http://localhost:3002/api/login
 const url= `${base_url}/login`;

 return this.http.post(url, data).
 pipe(
   tap((resp:any)=>{

     localStorage.setItem('token', resp.token);

   })
 )



}


mostrarVendedor(){
  //http://localhost:3002/api/vendedor

  const url = `${base_url}/vendedor`;
 return this.http.get<VendedorInterface>(url, this.headers)
 .pipe(
   map(resp=>{
     const vendedor = resp.vendedor.map(
       vend=> new Vendedor(vend.usuario, '', vend.cedula, vend.email, vend.genero, vend.direccion, vend.img, vend.uid)
     );
     return{
       ok: resp.ok,
       vendedor

     }
   })
 )
}



mostrarvendedrobyId(id:string){
  //http://localhost:3002/api/vendedor/6247c67cb4b08eedfeb6c0ed
  const url = `${base_url}/vendedor/${id}`;
  return this.http.get<any>(url, this.headers)
  .pipe(
    map((resp:{ok:true, vendedor:Vendedor})=> resp.vendedor)
  )

}


}
