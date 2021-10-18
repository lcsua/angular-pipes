import { RouterModule, Routes } from "@angular/router";
import { ComunesComponent } from './ventas/pages/comunes/comunes.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';
import { NgModule } from "@angular/core";

const routes: Routes = [
  { 
    path:'',
    component:ComunesComponent
  },
  { 
    path:'numeros',
    component:NumerosComponent
  },
  { 
    path:'no-comunes',
    component:NoComunesComponent
  },
  { 
    path:'ordenar',
    component:OrdenarComponent
  },
  {
    path:'**',
    redirectTo:''
  }

];



@NgModule({
  declarations: [],
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot( routes )
  ]
})
export class AppRouterModule { }
