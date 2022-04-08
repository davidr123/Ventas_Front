import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/Cliente.models';
import { Productos } from 'src/app/models/Productos.models';
import { Vendedor } from 'src/app/models/vendedor.models';
import { ProgressSpinnetService } from 'src/app/progressSpinnet/progress-spinnet.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProductosService } from 'src/app/services/productos.service';
import { VendedorService } from 'src/app/services/vendedor.service';
import Swal from 'sweetalert2';
import { FinalizarcompraComponent } from './finalizarcompra/finalizarcompra.component';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {

  public ELEMENT_DATA: Productos[]=[];

  displayedColumns: string[] = [ 'descripcion', 'codigo', 'cantidad', 'precio', 'iva', 'total'];
  dataSource = new MatTableDataSource( this.ELEMENT_DATA);
  public ArrayAdd:Productos[]=[];
  public ArrayProductosBorrado: Productos[]=[];
   public clientecompras!:Cliente;
public vendedor!:Vendedor;

public subtotalsinIva!:number;
public cantidad!:number;
public subtotal!:number;
public total!:number;
public iva!: number;
public totalIva!:number;
public Total!:any;
public totales:any=0;
public arrayTotales:Productos[]=[];
public arrayIvas:Productos[]=[];
public totalProductos!:any;
public SumTotal:any=0;
public SumTotalIva:any=0;
public totalidades:any=0;
public totalidadesIva:any=0;
public totalesaCobro:any=0;
public Ivas:any=0;
  constructor(public productoService: ProductosService, private clienteService: ClienteService, 
    private vendedorService: VendedorService, public dialog: MatDialog, private progressSpinerService:ProgressSpinnetService) { 

      this.vendedor= vendedorService.vendedor

  }

  ngOnInit(): void {

this.clienteService.cliente
.subscribe(client=>{
  console.log(client);
  this.clientecompras= client
})

    this.productoService.ObtenerInformaciondeProductos
    .subscribe(resp=>{
      console.log(resp)
      this.ArrayAdd= resp;

this.subtotalsinIva= this.ArrayAdd.reduce((total, item)=>{

  return total + item.precio
},0)


this.cantidad= this.ArrayAdd.reduce((total, item)=>{

  return total + item.cantidad
},0)



this.Total= this.ArrayAdd.forEach(item=> {
  // this.totales=(item.precio * item.cantidad)*item.iva + (item.precio* item.cantidad);
  this.totales= item.precio + (item.precio*item.iva)

})




  ///TOTAL
this.arrayTotales.push(this.totales);
console.log(this.arrayTotales);



for (let i = 0; i < this.arrayTotales.length; i++) {
    this.SumTotal = this.arrayTotales[i] ;
}

this.totalidades= this.totalidades+ this.SumTotal
console.log(this.totalidades);


///IVA
this.ArrayAdd.forEach(item=>{
  this.Ivas=  item.precio * item.iva;
})
this.arrayIvas.push(this.Ivas);
console.log(this.arrayIvas);

for(let i=0; i<this.arrayIvas.length; i++){
this.SumTotalIva= this.arrayIvas[i];
}
this.totalidadesIva= this.totalidadesIva + this.SumTotalIva;



      this.dataSource= new MatTableDataSource(this.ArrayAdd);
    });


    this.productoService.ObtenerProductoBorrado
    .subscribe(resp=>{

      this.ArrayAdd= resp;


      this.Total= this.ArrayAdd.forEach(item=> {
        // this.totales=(item.precio * item.cantidad)*item.iva + (item.precio* item.cantidad);
        this.totales= item.precio + (item.precio*item.iva)
      
      })
      
      
      
      
        ///TOTAL
      this.arrayTotales.push(this.totales);
      console.log(this.arrayTotales);
      
      
      
      for (let i = 0; i < this.arrayTotales.length; i++) {
          this.SumTotal = this.arrayTotales[i] ;
      }
      
      this.totalidades= this.totalidades+ this.SumTotal
      console.log(this.totalidades);
      
      
      ///IVA
      this.ArrayAdd.forEach(item=>{
        this.Ivas=  item.precio * item.iva;
      })
      this.arrayIvas.push(this.Ivas);
      console.log(this.arrayIvas);
      
      for(let i=0; i<this.arrayIvas.length; i++){
      this.SumTotalIva= this.arrayIvas[i];
      }
      this.totalidadesIva= this.totalidadesIva + this.SumTotalIva;

  
      this.dataSource= new MatTableDataSource(this.ArrayAdd);
    })

    
  }

  openDialog() {
    this.dialog.open(FinalizarcompraComponent);
  }


  Mesaje(){
    setTimeout(() => {

     
      Swal.fire('Gracias', 'Le agradecemos por su visita y compra ', 'success');
     
      
    }, 300);
    this.progressSpinerService.detach()
  }

}
