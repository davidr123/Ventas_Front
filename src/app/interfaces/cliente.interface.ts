import { Cliente } from "../models/Cliente.models";

export interface ClienteInterface{
    ok:true,
    clientes:Cliente[];
}