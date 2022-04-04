import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './authentication/auth-routing.module';
import { PagesRoutingModule } from './pages/pages.routing';



const routes: Routes = [

  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthRoutingModule,
  PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
