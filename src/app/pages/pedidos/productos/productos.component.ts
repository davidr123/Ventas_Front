import { newArray, stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { delay } from 'rxjs';
import { Productos } from 'src/app/models/Productos.models';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos:Productos[]=[];
  public ArrayAdd:Productos[]=[];
  public ArrayProductosActualizados:Productos[]=[];

  public productoSeleccioando:Productos | undefined;
  public productoAdd:Productos | undefined;
  public ELEMENT_DATA: Productos[]=[];

  public formProduct!:FormGroup;
  displayedColumns: string[] = [ 'descripcion', 'codigo', 'cantidad', 'precio', 'acciones'];
  dataSource = new MatTableDataSource( this.ELEMENT_DATA);
  ArrayProductoCarrito: any;

  constructor(private productosServices:ProductosService, private fb:FormBuilder) {
  
  }

  ngOnInit(): void {
    this.MostrarProductos();

  


  }


  MostrarProductos(){
    this.productosServices.mostrarproductos()
    .subscribe(resp=>{
      this.productos= resp.producto
console.log(this.productos)


    
    });
  }



  AnadirCarrito(producto:Productos){ 

    
 const  indice = this.ArrayAdd.findIndex(item=> item._id === producto._id);
 console.log(indice);
 if(indice ===- 1){

 this.ArrayAdd.push(producto);
 
}else{
this.ArrayAdd[indice].cantidad ++;
}


this.dataSource= new MatTableDataSource(this.ArrayAdd);


console.log(this.ArrayAdd);

 
  }


  AumentarProducto(producto:Productos){
    this.ArrayAdd= this.ArrayAdd.map(item=>{
       if(item._id === producto._id){
         item.cantidad++;
      
       }
 
       
       return item;

       
    } );

    
    
    this.dataSource= new MatTableDataSource(this.ArrayAdd);
  
    
    
  }


  DisminuirProducto(producto:Productos){
    this.ArrayAdd= this.ArrayAdd.filter((item:any)=>{
      if(item._id === producto._id){
        if(item.cantidad>0){
          item.cantidad--;
          if(item.cantidad===0) return
          return item
        }
      }else{
        {return item}
      }
    });


       this.dataSource= new MatTableDataSource(this.ArrayAdd);
    
  }
  
  
}
