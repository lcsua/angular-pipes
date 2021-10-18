import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  nombre: string = 'lucia';
  genero: string ='f';

  mapa = {
    'm': 'conocerte',
    'f': 'conocerla'
  }

  clientes: string[] =['lucas','sol','peter','rosa'];
  clientesMapa = {
    '=0': 'no hay clientes para visitar hoy',
    '=1': 'tenemos un cliente para visitar hoy',
    'other': 'tenemos # clientes para visitar hoy',
  }


  constructor() { }

  ngOnInit(): void {
  }

  quitarCliente(){
  if(this.clientes.length>0){
    this.clientes.shift();
  }
  }

  cambiarCliente(){

    if(this.genero==='m') {
    this.nombre="maria";
    this.genero="f"
    }
    else{
      this.nombre="lucas";
      this.genero="m"
    }
  }

  persona={
    nombre:'lucas',
    edad:33,
    pais:'argentina'
  }

  miObservable = interval(2000);
  miPromesa = new Promise((resolve, reject)=>{
setTimeout(() => {
  resolve('hay data............')
}, 3500);

  })

}
