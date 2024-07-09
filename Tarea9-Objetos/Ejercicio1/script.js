//Capturar usuario y contraseña desde cajas de texto y 
//almacenar la información en el localstorage en variables separadas.


let boton= document.getElementById('btnEnviar');
boton.addEventListener('click', capturarDatos);


function capturarDatos(){
    let usuario= document.getElementById('inputUsuario').value;
    let contraseña= document.getElementById('inputContraseña').value;

    
    let objeto={
        usu: usuario,
        con: contraseña,
    } 

    localStorage.setItem('usuario', usuario);
    localStorage.setItem('contraseña', contraseña);
    
}

