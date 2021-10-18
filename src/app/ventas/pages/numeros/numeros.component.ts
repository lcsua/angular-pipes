import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 1212323.7709;
  porcentaje: number = 0.7709;
  constructor() { }

  ngOnInit(): void {
  }

}
