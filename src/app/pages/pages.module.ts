import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { PagesComponent } from './pages.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { SidenavComponent } from './shared/sidenav.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatosClienteComponent } from './pedidos/datos-cliente/datos-cliente.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HistorialClienteComponent } from './pedidos/historial-cliente/historial-cliente.component';
import { ProductosComponent } from './pedidos/productos/productos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ConfirmacionComponent } from './pedidos/confirmacion/confirmacion.component';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
  
    PagesComponent,
    PedidosComponent,
    SidenavComponent,
    HeaderComponent,
    DatosClienteComponent,
    HistorialClienteComponent,
    ProductosComponent,
    ConfirmacionComponent,

 

  ],
  imports: [
    BrowserModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    BrowserAnimationsModule,
    RouterModule,
    MatTabsModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule

    
   
  ],
  
})
export class PagesModule { }
