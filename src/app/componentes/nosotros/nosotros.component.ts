import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],
})
export class NosotrosComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

    AOS.init();
  }

}
