import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-contadores',
  templateUrl: './contadores.component.html',
  styleUrls: ['./contadores.component.css']
})
export class ContadoresComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  
}
