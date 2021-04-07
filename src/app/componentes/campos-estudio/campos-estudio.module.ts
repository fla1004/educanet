import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamposEstudioComponent } from './campos-estudio.component';



@NgModule({
  declarations: [CamposEstudioComponent],
  imports: [
    CommonModule
  ], exports:[CamposEstudioComponent]
})
export class CamposEstudioModule { }
