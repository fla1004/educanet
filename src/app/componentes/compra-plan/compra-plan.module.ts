import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompraPlanComponent } from './compra-plan.component';



@NgModule({
  declarations: [CompraPlanComponent],
  imports: [
    CommonModule
  ],exports:[CompraPlanComponent]
})
export class CompraPlanModule { }
