import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import AOS from 'aos';
import Swal from 'sweetalert2';
import {CompraPlanService} from './compra-plan.service';
import { DatosPlan } from './datos';

@Component({
  selector: 'app-compra-plan',
  templateUrl: './compra-plan.component.html',
  styleUrls: ['./compra-plan.component.css']
})
export class CompraPlanComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  ci = new FormControl('',Validators.required);
  nombre = new FormControl('',Validators.required);
  telefono = new FormControl('', [Validators.required])

  constructor(private compraPlanService: CompraPlanService ) { }

  ngOnInit(): void {
    AOS.init();
  }

  datosPlanModel = new DatosPlan("","","","","");


  onSubmit() {

  if(this.datosPlanModel.nombre == "" || this.datosPlanModel.ci == "" || this.datosPlanModel.correo=="" || this.datosPlanModel.telefono =="" )
    {
      Swal.fire({
        icon: 'error',
        text: 'Ingrese todos los datos!',
      })
      return "Error datos vacios";
    }
    else
    {
      if(this.datosPlanModel.telefono.length >8 || this.datosPlanModel.telefono.length < 8)
      {
        Swal.fire({
          icon: 'error',
          text: 'Ingrese un numero de telefono valido!',
        })
      }
      else{
        Swal.fire({
          icon: 'success',
          title: 'Su solicitud fue enviada',
          showConfirmButton: false,
          timer: 2500
        });
        
    console.log(this.datosPlanModel);
        this.compraPlanService.correo(this.datosPlanModel).subscribe(() =>{
          console.log("enviado");
         })

         /*this.compraPlanService.correo().subscribe(()=>{
          console.log("enviado");
         })*/
      }
     
    }
   
  }

  getErrorMessage() {
    return this.email.hasError('email') ? 'No es un email valido' : '';
  }
  getErrorMessageTel() {
    return this.telefono.hasError('telefono') ? 'Ingrese un telefono' : '';
  }
}
