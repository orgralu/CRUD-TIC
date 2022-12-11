listarEmpleados();
listarTipoCedula();

function listarEmpleados(busqueda){
    fetch("https://localhost/empleado/jsphp.php", {
        method: "POST",
        body: busqueda
    }).then(response => response.text()).then(response => {
        resultado.innerHTML = response;
    })
}

function listarTipoCedula(busqueda){
    fetch("https://localhost/empleado/jsphp.php?consultarTipoCedula", {
        method: "POST"
    }).then(response => response.text()).then(response => {
        id_cedula.innerHTML = response;
    })
}

function guardar() {
    fetch("https://localhost/empleado/jsphp.php?insertar=1",{
        method: "POST",
        body: new FormData(frm)
    }).then(response => response.text()).then(response => {
        if (response == "Registrado"){
            Swal.fire({
                icon: 'success',
                title: 'Empleado Registrado',
                showConfirmButton: false,
                timer: 1500
            })
            console.log(response);
            frm.reset();
            listarEmpleados();
        }
        if (response == "Actualizado"){
            Swal.fire({
                icon: 'success',
                title: 'Empleado Actualizado',
                showConfirmButton: false,
                timer: 1500
            })
            console.log(response);
            registrar.value = "Registrar";
            ide.value = "";
            frm.reset();
            listarEmpleados();
        }
        
    })
}

function Eliminar(id){
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
          fetch("https://localhost/empleado/jsphp.php?borrar=", {
            method: "POST",
            body: id
          }).then(response => response.text()).then(response =>{
            console.log(response);
            Swal.fire({
                icon: 'success',
                title: 'Empleado Eliminado',
                showConfirmButton: false,
                timer: 1500
            })
            listarEmpleados();
          })
        }
      })
}

function Editar(id){
    fetch("https://localhost/empleado/jsphp.php?consultar=", {
        method: "POST",
        body: id
    }).then(response => response.json()).then(response =>{
        ide.value = response[0].id;
        nombre.value = response[0].nombre;
        apellido.value = response[0].apellido;
        correo.value = response[0].correo;
        id_cedula.value = response[0].id_cedula;
        cedula.value = response[0].cedula;
        registrar.value = "Actualizar";
    })
}

function Buscar(){
    const valor = buscar.value;
    if(valor==""){
        listarEmpleados();
    }else{
        listarEmpleados(valor);
    }
}