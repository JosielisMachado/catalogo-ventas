const fs = require('fs');

// Lee las fotos
const archivos = fs.readdirSync('./fotos').filter(archivo => archivo.match(/\.(jpg|jpeg|png|gif)$/i));

// Transforma la lista de textos en una lista de "objetos" con datos estructurados
const productos = archivos.map(archivo => {
    let nombre = "Producto";
    let precio = "Consultar";

    // Quitamos la extensión de la imagen (.jpg, .png)
    const nombreSinExtension = archivo.replace(/\.[^/.]+$/, "");

    // Si el nombre tiene un guion, separamos el nombre del precio
    if(nombreSinExtension.includes("-")) {
        const partes = nombreSinExtension.split("-");
        // Reemplazamos los guiones bajos por espacios para que se lea bonito
        nombre = partes[0].replace(/_/g, " "); 
        precio = partes[1];
    } else {
        nombre = nombreSinExtension;
    }

    // Retornamos el objeto estructurado
    return { archivo, nombre, precio };
});

fs.writeFileSync('./productos.json', JSON.stringify(productos, null, 2));
console.log('¡Catálogo actualizado con nombres y precios!');