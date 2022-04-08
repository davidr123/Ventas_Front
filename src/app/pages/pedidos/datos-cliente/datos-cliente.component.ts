import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ProgressSpinnetService } from 'src/app/progressSpinnet/progress-spinnet.service';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

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
  constructor(private fb: FormBuilder, private clienteService: ClienteService,
    private progressSpinerService:ProgressSpinnetService ) { }

  ngOnInit(): void {
  
 

  }


  GuardarCliente(){
this.clienteService.guardarcliente(this.FormCliente.value)
.pipe(finalize(() => this.progressSpinerService.detach()))
.subscribe((resp:any)=>{
  console.log(resp);

  Swal.fire('Guardado', 'el cliente a sido creado con éxito', 'success');
  this.clienteService.cliente.emit(resp)
})


  }

}
