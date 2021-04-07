import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadoresComponent } from './contadores.component';



@NgModule({
  declarations: [ContadoresComponent],
  imports: [
    CommonModule
  ], exports:[ContadoresComponent]
})
export class ContadoresModule { }
