import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { tap } from 'rxjs';

import { VendedorService } from '../services/vendedor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private vendedorService: VendedorService, private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      


    return  this.vendedorService.validarToken()
    .pipe(
      tap(estaAutenticado=>{
        if(!estaAutenticado){
          this.route.navigateByUrl('login');
          
        }
      })
    );
  }
  
}
