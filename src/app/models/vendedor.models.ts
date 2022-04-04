import { environment } from "src/environments/environment";

const base_url= environment.base_url;
export class Vendedor{

    
    constructor(
    public  usuario:string,
    public password:string,
    public  cedula?: string,
    public  email?:string,
    public genero?:string,
    public direccion?:string,
    public  img?    :string,
    public  uid?   :string

    ){

    }


get ImagenUrl(){
        //http://localhost:3002/api/uploads/productos/f94780c0-c43c-4711-a004-5ch8ea6c32d9d.png
      
        if(this.img){
            return `${base_url}/uploads/vendedores/${this.img}` 
         
        }else{
            return `${base_url}/uploads/vendedores/no-img`  
             
        }
   


    }
}