import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiaGPSComponent } from './guia-gps.component';



@NgModule({
  declarations: [GuiaGPSComponent],
  imports: [
    CommonModule
  ], exports:[GuiaGPSComponent]
})
export class GuiaGPSModule { }
