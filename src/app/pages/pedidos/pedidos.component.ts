import { Component, OnInit } from '@angular/core';
import { VendedorService } from 'src/app/services/vendedor.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private vendedorService:VendedorService) { }

  ngOnInit(): void {
    // this.MostrarVendedor()
  }

  // MostrarVendedor(){
  //   this.vendedorService.mostrarVendedor()
  //   .subscribe((vendedor)=>{
  //     console.log(vendedor)
  //   })
  // }

}
