import { Component } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';
import Swal from'sweetalert2';
import { Empleado } from 'src/app/servicio/Empleado';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent {
  //Empleados:any;
  public search: string = '';
  filterText: string = '';
  empleados: Array<Empleado> = [];

  constructor(
    private crudService:CrudService
  ){}

  ngOnInit() {
    /* 
    this.crudService.ObtenerEmpleados().subscribe(respuesta=>{
      console.log(respuesta);
      this.Empleados=respuesta;
    });*/
    this.listaDeEmpleados();
    
  }

  listaDeEmpleados(){
    this.crudService.ObtenerEmpleados2().subscribe(respuesta=>{
      console.log(respuesta);
      this.empleados = respuesta;
    });
  }

  borrarRegistro(id:any){
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'NO!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.crudService.borrarEmpleado(id).subscribe((respuesta)=>{
            this.listaDeEmpleados();
            Swal.fire({
              icon: 'success',
              title: 'Empleado Eliminado',
              showConfirmButton: false,
              timer: 1500
            })
          });
        }
      })

  }

 
}
