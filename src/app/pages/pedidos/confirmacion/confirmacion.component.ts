import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Productos } from 'src/app/models/Productos.models';
import { ProductosService } from 'src/app/services/productos.service';

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
  constructor(public productoService: ProductosService) { }

  ngOnInit(): void {

    this.productoService.ObtenerInformaciondeProductos
    .subscribe(resp=>{
      console.log(resp)
      this.ArrayAdd= resp;

      this.dataSource= new MatTableDataSource(this.ArrayAdd);
    });


    this.productoService.ObtenerProductoBorrado
    .subscribe(resp=>{

      this.ArrayProductosBorrado= resp;
      this.dataSource= new MatTableDataSource(this.ArrayProductosBorrado);
    })

    
  }

}
