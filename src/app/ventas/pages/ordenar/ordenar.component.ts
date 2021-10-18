import { Component, OnInit } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {
 
  isMayus : boolean = true;
  heroes:  Heroe[] = [
    { nombre :"super azul", vuela:true, color: Color.azul },
    { nombre : "linterna", vuela:true, color: Color.verde },
    { nombre :"flash", vuela:true, color: Color.rojo }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  cambiarCase()
  {
     this.isMayus=  !this.isMayus;
  }

}
