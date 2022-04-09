import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { PagesComponent } from './pages.component';
import { DatosClienteComponent } from './pedidos/datos-cliente/datos-cliente.component';
import { EditClienteComponent } from './pedidos/historial-cliente/edit-cliente/edit-cliente.component';
import { HistorialClienteComponent } from './pedidos/historial-cliente/historial-cliente.component';
import { HistorialesComponent } from './pedidos/historiales/historiales.component';
import { PedidosComponent } from './pedidos/pedidos.component';



const routes: Routes = [
 
    {
        path: 'dashboard', 
        component: PagesComponent,
        canActivate:[AuthGuard],
        children:[
        

          {path:'pedidos', component:PedidosComponent},
          {path:'historial-cliente', component:HistorialClienteComponent},
          {path:'datos', component:DatosClienteComponent},
          {path:'edit-cliente/:id', component:EditClienteComponent},
          {path:'historiales', component:HistorialesComponent},

          // {path:'cliente/:id', component:DatosClienteComponent},
        
        ]
      }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
