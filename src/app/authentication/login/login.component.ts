import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VendedorService } from 'src/app/services/vendedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public FormloginVendedor = this.fb.group({
    
    usuario:['', Validators.required],
    password:['', Validators.required]
  });

  public SentLogin!: false;

  

  constructor(private VendedorService: VendedorService, private fb:FormBuilder, private route:Router) { }


  ngOnInit(): void {
  }

  Login(){
    this.VendedorService.loginVendedor(this.FormloginVendedor.value)
    .subscribe(resp=>{
      console.log(resp);
      this.route.navigateByUrl('dashboard')
     

    },(err)=>{
     Swal.fire('Error', err.error.msg , 'error');
    });
  }



}
