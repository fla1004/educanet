import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatosPlan } from './datos';

@Injectable({
  providedIn: 'root'
})
export class CompraPlanService {

 // URL = "http://localhost/Educanet/educanet1/server/";
  URL = "https://educanetbolivia.000webhostapp.com/";

  constructor(private http: HttpClient) { }

  correo(datosPlan: DatosPlan){
    console.log("Servicio",datosPlan);
    return this.http.post(`${this.URL}enviar-prueba.php`, datosPlan);

   /* console.log("Servicio");
    return this.http.get(`${this.URL}enviar-prueba.php`);*/
  }
  
}
