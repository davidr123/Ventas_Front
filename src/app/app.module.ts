import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './authentication/auth-routing.module';

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthModule } from './authentication/auth.module';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
  

 


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
AuthModule,
PagesModule,
BrowserAnimationsModule

   
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
