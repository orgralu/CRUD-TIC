import { Pipe, PipeTransform } from '@angular/core';
import { Empleado } from 'src/app/servicio/Empleado';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(empleados: Empleado[], filterText: string) {
    if(empleados.length === 0 || filterText === ''){
      return empleados;
    }else{
      return empleados.filter((empleado) => 
      { 
        //return empleado.nombre.toLowerCase() === filterText.toLowerCase()
        return empleado.nombre.toUpperCase().includes(filterText.toUpperCase())
      })
    }
  }

}
