import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { InformacionCursosComponent } from './componentes/informacion-cursos/informacion-cursos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { PlanesComponent } from './componentes/planes/planes.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { CamposEstudioComponent } from './componentes/campos-estudio/campos-estudio.component';
import { RequisitosComponent } from './componentes/requisitos/requisitos.component';
import { MembresiasComponent } from './membresias/membresias.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CompraPlanComponent } from './componentes/compra-plan/compra-plan.component';
import { GuiaGPSComponent } from './componentes/guia-gps/guia-gps.component';
import { ContadoresComponent } from './componentes/contadores/contadores.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    NosotrosComponent,
    InformacionCursosComponent,
    FooterComponent,
    ContactanosComponent,
    PlanesComponent,
    HeroComponent,
    CursosComponent,
    CamposEstudioComponent,
    RequisitosComponent,
    MembresiasComponent,
    ServiciosComponent,
    CompraPlanComponent,
    GuiaGPSComponent,
    ContadoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    FormsModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
