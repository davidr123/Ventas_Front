import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/Cliente.models';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historial-cliente',
  templateUrl: './historial-cliente.component.html',
  styleUrls: ['./historial-cliente.component.css']
})
export class HistorialClienteComponent implements OnInit {

  public FormCliente= this.fb.group({
    nombre:['', Validators.required],
    cedula:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    genero:['', Validators.required],
    direccion:['', Validators.required],
    producto:['', Validators.required]
  });

  public cedulaCliente:Cliente|undefined;

  public clienteCedulaArray: Cliente[]=[];

  constructor(private fb:FormBuilder, private clienteService:ClienteService) { }

  ngOnInit(): void {


  }


  MostrarClientebyCedula(){

    this.clienteService.mostrarclientebycedula(this.FormCliente.get('cedula')?.value)
    .subscribe((clientes)=>{
    this.clienteCedulaArray= clientes.client

      //Mostrar cliente en el formulario por #cedular
      // const clienteSelecionado = clientes.client
      // clienteSelecionado.forEach(item=>{
      //   const {nombre, cedula, email, genero, direccion}= item;

      //   console.log(nombre, cedula, email, genero, direccion);
      //   // this.cedulaCliente= clientes;
      // this.FormCliente.patchValue({nombre, cedula, email, genero, direccion});

      // })
     
    
    
    })


    
  }



  actualizarCliente(){
    this.clienteService.actualizarcliente(this.FormCliente.value)
    .subscribe(resp=>{

      Swal.fire('Actualizado', ` a sido actualizado`, 'success')

    })

  }

}
