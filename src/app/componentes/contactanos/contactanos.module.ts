import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactanosComponent } from './contactanos.component';



@NgModule({
  declarations: [ContactanosComponent],
  imports: [
    CommonModule
  ], exports:[ContactanosComponent]
})
export class ContactanosModule { }
