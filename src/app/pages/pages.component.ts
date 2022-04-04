import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendedor } from '../models/vendedor.models';
import { VendedorService } from '../services/vendedor.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  public vendedor!:Vendedor;

 

  sideBarOpen= true;
  constructor(private route:Router, private vendedorService: VendedorService) { 
  this.vendedor= vendedorService.vendedor;
  }

  ngOnInit(): void {
  }
  sideBarToggle(){
    this.sideBarOpen=!this.sideBarOpen;
  }

  Logout(){

    localStorage.removeItem('token');
this.route.navigateByUrl('login');

  }
}
