const fs = require('fs');

// Lee lo que hay en la carpeta fotos
const fotos = fs.readdirSync('./fotos').filter(archivo => archivo.match(/\.(jpg|jpeg|png|gif)$/i));

// Crea un archivo JSON con los nombres de las fotos
fs.writeFileSync('./productos.json', JSON.stringify(fotos));

console.log('¡Lista de productos actualizada con éxito!');