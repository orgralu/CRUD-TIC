import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmpleadoComponent } from './componentes/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './componentes/edit-empleado/edit-empleado.component';
import { ListEmpleadoComponent } from './componentes/list-empleado/list-empleado.component';

import { indexPHPJS } from './phpjavascript/enrutar.component';

import { indexPHP } from './php/enrutarphp.component';

const routes: Routes = [ //---RUTAS
  {path: '',pathMatch: 'full', redirectTo: 'list-empleado'},
  {path: 'add-empleado', component: AddEmpleadoComponent},
  {path: 'list-empleado', component: ListEmpleadoComponent},
  {path: 'edit-empleado/:id', component: EditEmpleadoComponent},
  {path: 'phpjs', component: indexPHPJS},
  {path: 'php', component: indexPHP}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
