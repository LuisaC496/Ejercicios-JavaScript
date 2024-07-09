//Crear dos objetos, uno de mascotas y el otro de electrodomésticos. 
//Almacenarlos en el local storage.

    let mascotas={
        nom: "sasha",
        edad: "2 años",
        raza: "pincher enano"
    } 
    let electrodomésticos={
        nom: "televisor",
        marca: "LG",
        modelo: "WF5000R",
    } 

    localStorage.setItem('mascotas', JSON.stringify(mascotas));
    localStorage.setItem('electrodomesticos', JSON.stringify(electrodomésticos));

    
