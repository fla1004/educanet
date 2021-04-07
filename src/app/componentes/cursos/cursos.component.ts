import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
