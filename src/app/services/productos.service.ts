import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductosInteface } from '../interfaces/productos.interface';
import { Productos } from '../models/Productos.models';
const base_url= environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  get Token(){
    return localStorage.getItem('token')|| '';
      }

      get headers(){

       return {headers:{
         'x-token':this.Token
       }}
      }


      public producto!: Productos

  constructor(private http:HttpClient) { }

  mostrarproductos(){
    //http://localhost:3002/api/productos
    const url = `${base_url}/productos`;
    return this.http.get<ProductosInteface>(url, this.headers)
    .pipe(
      map(resp=>{
        const producto= resp.productos.map(pro=>new Productos(pro._id, pro.descripcion, pro.codigo, pro.cantidad, 
          pro.precio, pro.cliente, pro.img, pro.tipo)
          
          );

          return{
            ok:true,
            producto
          }
      })
    )
  }
}
