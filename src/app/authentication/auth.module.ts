import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
  
    LoginComponent

 

  ],
  imports: [
    BrowserModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule
    
   
  ],
  
})
export class AuthModule { }
