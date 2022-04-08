import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs/internal/operators/timeout';
import { ProgressSpinnetService } from 'src/app/progressSpinnet/progress-spinnet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-finalizarcompra',
  templateUrl: './finalizarcompra.component.html',
  styleUrls: ['./finalizarcompra.component.css']
})
export class FinalizarcompraComponent implements OnInit {

  public cargado:Boolean= true;

  constructor(private progressSpinerService:ProgressSpinnetService) { }

  ngOnInit(): void {

this.Mensjase();
  }


  Mensjase(){
    setTimeout(() => {
      this.progressSpinerService.detach
     
      Swal.fire('GRACIAS', 'Estamos agradecidos por su compra', 'success');
      this.cargado=false;
    }, 500);
  }

    
  

}
