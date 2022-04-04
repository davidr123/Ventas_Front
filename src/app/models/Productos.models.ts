import { environment } from "src/environments/environment";
import { ClienteService } from "../services/cliente.service";
import { Cliente } from "./Cliente.models";
const base_url= environment.base_url;
export class Productos{

 constructor(

    public _id: string,
    public descripcion:string,
    public codigo: string,
    public cantidad: number,
    public precio: number,
    public cliente:Cliente,
    public img: string,
    public tipo:string
 ){

 }

 
get ImagenUrl(){
    //http://localhost:3002/api/uploads/productos/f94780c0-c43c-4711-a004-5ch8ea6c32d9d.png
  
    if(this.img){
        return `${base_url}/uploads/productos/${this.img}` 
     
    }else{
        return `${base_url}/uploads/productos/no-img`  
         
    }



}
}