import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent {
  formularioDeEmpleados:FormGroup;
  elID:any;
  TipoCedula:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder,
    private ruteador:Router
  ){
    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);

    this.crudService.ObtenerEmpleado(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioDeEmpleados.setValue({
          nombre:respuesta[0]["nombre"],
          correo:respuesta[0]["correo"],
          apellido:respuesta[0]["apellido"],
          cedula:respuesta[0]["cedula"],
          id_cedula:respuesta[0]["id_cedula"]
        });
      }
    );
    this.formularioDeEmpleados=this.formulario.group(
      {
        nombre:[""],
        correo:[""],
        apellido:[""],
        cedula:[""],
        id_cedula:[""]
      }
    );
  }

  ngOnInit() {
    this.crudService.ObtenerTiposCedulas().subscribe(respuesta=>{
      console.log(respuesta);
      this.TipoCedula=respuesta;
    });
  } 

  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioDeEmpleados.value);
    this.crudService.EditarEmpleado(this.elID,this.formularioDeEmpleados.value).subscribe(()=>{
      this.ruteador.navigateByUrl("/list-empleado")
    });
  }

}
