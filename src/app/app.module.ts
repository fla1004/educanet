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


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    NosotrosComponent,
    InformacionCursosComponent,
    FooterComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
