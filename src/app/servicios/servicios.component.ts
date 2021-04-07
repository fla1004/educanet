import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
