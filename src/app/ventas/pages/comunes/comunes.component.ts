import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html',
  styles: [
  ]
})
export class ComunesComponent implements OnInit {

  lucas: string = "lucAs bolivAr";
  fecha: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
