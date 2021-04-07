import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanesComponent } from './planes.component';



@NgModule({
  declarations: [ PlanesComponent],
  imports: [
    CommonModule
  ], exports:[PlanesComponent]
})
export class PlanesModule { }
