
    let peliculas = [];

    function agregarPelicula() {
      let nombre = prompt("Ingrese el nombre de la película:");
      let poster = prompt("Ingrese la URL del póster de la película:");

      if (nombre && poster) {
        let elementos = document.createElement("contenedor-peliculas");
        elementos.classList.add("pelicula")

        // Crear imagen
        let imagen = document.createElement("img");
        imagen.src = poster;
        imagen.style.width = "200px"; 
        imagen.style.height = "auto"; 

        let titulo = document.createElement("p");
        titulo.textContent = nombre;

        // Agregar imagen y título al elemento de película
        elementos.appendChild(imagen);
        elementos.appendChild(titulo);

        // Agregar la película al arreglo
        peliculas.push(elementos);
    
         
        // Limpiar el contenedor actual de películas
        let ContenedorPeliculas = document.getElementById("contenedor-peliculas");
        ContenedorPeliculas.innerHTML = "";

        // Mostrar las 10 películas más recientes
        let inicio = Math.max(0, peliculas.length - 10); 
        for (let i = inicio; i < peliculas.length; i++) {
          ContenedorPeliculas.appendChild(peliculas[i]);
        }
      } else {
        alert("Debe ingresar tanto el nombre como la URL del póster.");
      }
    }

    // Agregar películas hasta llegar a 10
    while (peliculas.length < 10) {
      agregarPelicula();
    }
