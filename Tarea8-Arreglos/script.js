//Ejercicio# 1
//Crear un arreglo (temática libre), el cual sea recorrido con la función map() e imprimir por consola cada uno de sus elementos.

/*let comida = ['empanada', 'hambuerguesa', 'pizza', 'sancocho', 'lasaña'];

comida.map((elemento, indice) => {
    console.log(`El elemento en la posición ${indice} es ${elemento}`);
})*/
//Ejercicio #2
//Tomar el ejercicio de la Tarea-01 adicionar elementos a la última posición con push, eliminar elementos de una posición que se le indique con splice.

//Añadir.
//let comida = ['empanada', 'hambuerguesa', 'pizza', 'sancocho', 'lasaña'];
    //comida.push('pollo asado');
    //console.log(comida)
//Eliminar
/*let pos = comida.indexOf('hamburguesa');
let elementoEliminado = comida.splice(pos, 1);
console.log(comida)*/

//Ejercicio #3
//Hacer un arreglo de objetos JSON y almacenarlo en el localstorage.

/*/ Almacenar datos en localStorage
localStorage.setItem('nombreUsuario', 'Juan');
localStorage.setItem('preferencias', JSON.stringify({ tema: 'oscuro', idioma: 'es' }));

// Recuperar datos de localStorage
let nombre = localStorage.getItem('nombreUsuario');
let preferencias = JSON.parse(localStorage.getItem('preferencias'));

console.log(nombre); // Juan
console.log(preferencias); // { tema: 'oscuro', idioma: 'es' }

// Eliminar un dato de localStorage
localStorage.removeItem('nombreUsuario');

// Limpiar todos los datos de localStorage para el origen actual
localStorage.clear();*/

// Paso 1: Crear un arreglo de objetos JSON
let usuarios = [
    { nombre: "Juan", email: "juan@example.com", edad: 30 },
    { nombre: "María", email: "maria@example.com", edad: 25 },
    { nombre: "Carlos", email: "carlos@example.com", edad: 35 }
  ];
  
  // Paso 2: Convertir a JSON y almacenar en localStorage
  let usuariosJSON = JSON.stringify(usuarios);
  localStorage.setItem('usuarios', usuariosJSON);
  console.log('Arreglo de usuarios almacenado en localStorage.');
  
  // Paso 3: Recuperar datos del localStorage (opcional)
  let usuariosRecuperados = localStorage.getItem('usuarios');
  let usuariosParseados = JSON.parse(usuariosRecuperados);
  
  console.log('Datos recuperados del localStorage:');
  console.log(usuariosParseados);
  