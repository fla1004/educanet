import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraPlanComponent } from './componentes/compra-plan/compra-plan.component';
import { InicioComponent } from './inicio/inicio.component';
import { MembresiasComponent } from './membresias/membresias.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  }, 
  {
    path: 'servicios',
    component: ServiciosComponent,
  },
  {
    path: 'membresias',
    component: MembresiasComponent,
  },
  {
    path: 'compraPlan',
    component: CompraPlanComponent,
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
