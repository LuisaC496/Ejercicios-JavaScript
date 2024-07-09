/*Realizar un formulario de registro que capture los siguientes
datos del usuarios: Nombres Apellidos Teléfono Dirección Género 
Nombre de usuario Contraseña Usar funciones, objetos, almacenar
en el local storage (setItem) y obtener la información del localstorage y 
mostrarla en una alerta o por consola (setItem). */


let boton= document.getElementById('btnEnviar');
boton.addEventListener('click', capturarDatos);


document.addEventListener('DOMContentLoaded', function(){
    obtenerLocalStorage();
})

function capturarDatos(){
    let nombre= document.getElementById('inputNombre').value;
    let apellido= document.getElementById('inputApellido').value;
    let telefono= document.getElementById('inputTelefono').value;
    let direccion= document.getElementById('inputDireccion').value;
    let genero= document.getElementById('inputGenero').value;
    let usuario= document.getElementById('inputNombreUsuario').value;
    let contraseña= document.getElementById('inputContraseña').value;
    
    let objeto={
        nom: nombre,
        ape: apellido,
        tel: telefono,
        dir: direccion,
        gen: genero,
        usu: usuario,
        con: contraseña
        } 

    localStorage.setItem('persona', JSON.stringify(objeto));
    
}

function obtenerLocalStorage(){
   let objeto= localStorage.getItem('persona');
   alert(objeto);
}