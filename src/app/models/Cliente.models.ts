import { Vendedor } from "./vendedor.models";

export class Cliente{
    constructor(
        public _id: string,
       public nombre: string,
       public cedula: string,
       public email: string,
       public genero: string,
       public direccion: string,
       public vendedor?: Vendedor[]
      
    ){

    }
}