import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
import { Cliente } from 'src/app/models/Cliente.models';
import { ClienteService } from 'src/app/services/cliente.service';
import { VendedorService } from 'src/app/services/vendedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {


  
  public clienteCedulaArray!: Cliente

  public clienteselccionado:Cliente|undefined;
  public FormCliente!:FormGroup;

  constructor(private fb:FormBuilder, private clienteService:ClienteService, private activatedRoute:ActivatedRoute
    ,private vendedorService:VendedorService, @Inject(MAT_DIALOG_DATA) public data:Cliente, private route:Router
  ) { 

  
    }

    

  ngOnInit(): void {

    console.log(this.data)

    // this.activatedRoute.params.subscribe(({id})=> this.CargarCliente(id))
  
 

 this.CargarCliente();


     this.FormCliente= this.fb.group({
      nombre:['', Validators.required],
      cedula:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      genero:['', Validators.required],
      direccion:['', Validators.required]
      
  
    });

   

  }


 
  CargarCliente(){

    this.clienteService.mostrarclinetebyid(this.data._id)
    .subscribe(resp=>{
console.log(resp)
      this.clienteselccionado= resp;
      
      const {nombre, cedula, email, genero, direccion}=  resp;

      this.FormCliente.setValue({nombre, cedula, email, genero, direccion});
    })

  }


  CargarVendedor(id:string){

this.vendedorService.mostrarvendedrobyId(id)
.subscribe(resp=>{
  console.log(resp);
})
  }


  ActualizarCliente(){

    
      const data={
        ...this.FormCliente.value,
        _id:this.data._id
      }
      this.clienteService.actualizarcliente(data)
      .pipe(
        delay(100)
      )
      .subscribe(cliente=>{
  
        console.log(cliente);
  Swal.fire('Actualizado', 'El cliente a sido actualizado con éxito', 'success');

 
  
      })
    


  }


}
