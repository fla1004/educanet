import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacionCursosComponent } from './informacion-cursos.component';



@NgModule({
  declarations: [InformacionCursosComponent],
  imports: [
    CommonModule
  ],exports:[InformacionCursosComponent]
})
export class InformacionCursosModule { }
