import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-membresias',
  templateUrl: './membresias.component.html',
  styleUrls: ['./membresias.component.css']
})
export class MembresiasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
