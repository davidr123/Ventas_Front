import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { delay, finalize } from 'rxjs';
import { Cliente } from 'src/app/models/Cliente.models';
import { Vendedor } from 'src/app/models/vendedor.models';
import { ProgressSpinnetService } from 'src/app/progressSpinnet/progress-spinnet.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { HistorialClienteService } from 'src/app/services/historial-cliente.service';
import { VendedorService } from 'src/app/services/vendedor.service';
import Swal from 'sweetalert2';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';

@Component({
  selector: 'app-historial-cliente',
  templateUrl: './historial-cliente.component.html',
  styleUrls: ['./historial-cliente.component.css']
})
export class HistorialClienteComponent implements OnInit {

public ArrayVendedor:Vendedor[]=[];
 public FormCliente!: FormGroup;
  public cedulaCliente:Cliente|undefined;

  public clienteselec:Cliente|undefined;

public cli:any;
  public idclient:Cliente|undefined;

  public mostrarCliente:Cliente[]=[];

  public clienteCedulaArray: Cliente[]=[];
  public CLientes:Cliente| undefined;

  public nuevoArrayClinete:Cliente[]=[];
  constructor(private fb:FormBuilder, private clienteService:ClienteService, public dialog: MatDialog,
    private vendedorService:VendedorService, private historialclienteService:HistorialClienteService,
    private progressSpinerService: ProgressSpinnetService) { }

  ngOnInit(): void {
    this.clienteService.clienteactuaizado
    .subscribe(resp=>{
      console.log(resp);
    })
    
   
    this.FormCliente= this.fb.group({
  
      cedula:['', Validators.required],
  
    });


 
   
        
  
    
  
  }


  MostrarClientebyCedula(){

    this.historialclienteService.ObtenerClientebyCedula(this.FormCliente.get('cedula')?.value)
    .pipe(finalize(() => this.progressSpinerService.detach()))
    .subscribe((cliente)=>{
      console.log(cliente)
    this.clienteCedulaArray= cliente
    const clientecedula= this.clienteCedulaArray.find(item=> item)

    if(!clientecedula){
      Swal.fire('Cliente no encontrado', 'No existe un cliente con ese número de cédula', 'warning');
    }
    

      //Mostrar cliente en el formulario por #cedular
      // const clienteSelecionado = clientes.client
      // clienteSelecionado.forEach(item=>{
      //   const {nombre, cedula, email, genero, direccion}= item;

      //   console.log(nombre, cedula, email, genero, direccion);
      //   // this.cedulaCliente= clientes;
      // this.FormCliente.patchValue({nombre, cedula, email, genero, direccion});

      // })
     
    
    
    });


    
  }






  openDialog(id:string){

 console.log(id);


 this.idclient= this.clienteCedulaArray.find(item=> item._id === id)
 console.log(this.idclient)

    const dialogRef = this.dialog.open(EditClienteComponent, 
      {data: this.idclient});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.MostrarClientebyCedula();
    });

    
  }


MostrarCLientes(){
  this.clienteService.mostrarcliente()
  .pipe(
    delay(100)
  )
  .subscribe(({cliente})=>{
 this.mostrarCliente= cliente
   console.log(this.mostrarCliente);


  });
}


MostrarVendedor(){
  this.vendedorService.mostrarVendedor()
  .subscribe(({vendedor})=>{
  this.ArrayVendedor=vendedor
  })
}


BorrarCliente(id:string){
  this.idclient= this.clienteCedulaArray.find(item=> item._id === id)
  this.clienteService.BorrarCliente(id)

  .subscribe(resp=>{
    console.log(resp);


    Swal.fire('Borrado', 'el cliente a sido borrado con éxito', 'success');

    this.MostrarClientebyCedula();
  })
}
 
}
