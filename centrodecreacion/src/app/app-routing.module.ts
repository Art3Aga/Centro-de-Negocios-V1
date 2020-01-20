import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';


const routes: Routes = [

  { path: 'empleados', component: EmpleadosComponent },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: '**', redirectTo: 'bienvenida' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
