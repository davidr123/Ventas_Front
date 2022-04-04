import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-datos-cliente',
  templateUrl: './datos-cliente.component.html',
  styleUrls: ['./datos-cliente.component.css']
})
export class DatosClienteComponent implements OnInit {


  public FormCliente= this.fb.group({
    nombre:['', Validators.required],
    cedula:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    genero:['', Validators.required],
    direccion:['', Validators.required],
    producto:['', Validators.required]
  })
  constructor(private fb: FormBuilder, private clienteService: ClienteService ) { }

  ngOnInit(): void {
  }


  GuardarCliente(){
this.clienteService.guardarcliente(this.FormCliente.value)
.subscribe(resp=>{
  console.log(resp);
})


  }

}
