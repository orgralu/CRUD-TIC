import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent {
  TipoCedula:any;
  formularioDeEmpleados:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
    ){
    
    this.formularioDeEmpleados=this.formulario.group({
      nombre:[""],
      correo:[""],
      apellido:[""],
      cedula:[""],
      id_cedula:[""]
    });
  }

  ngOnInit() {
    this.crudService.ObtenerTiposCedulas().subscribe(respuesta=>{
      console.log(respuesta);
      this.TipoCedula=respuesta;
    });
  } 

  enviarDatos():any{
    console.log(this.formularioDeEmpleados.value)
    this.crudService.AgregarEmpleado(this.formularioDeEmpleados.value).subscribe(respuesta=>{
      this.ruteador.navigateByUrl("/list-empleado")
    });
  }

}
