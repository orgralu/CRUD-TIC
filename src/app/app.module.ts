import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpleadoComponent } from './componentes/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './componentes/edit-empleado/edit-empleado.component';
import { ListEmpleadoComponent } from './componentes/list-empleado/list-empleado.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FiltroPipe } from './componentes/pipes/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddEmpleadoComponent,
    EditEmpleadoComponent,
    ListEmpleadoComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
