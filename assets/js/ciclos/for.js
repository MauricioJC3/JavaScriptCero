
/**
 * ✔️ Usa for si necesitas control total sobre las iteraciones.
 * ✔️ Usa for...in para recorrer objetos.
 * ✔️ Usa for...of para recorrer arrays y estructuras iterables sin preocuparte de los índices.
 */


const libros = ['el nombre del viento','el nombre del sol','el nombre de la luna','el nombre de la tierra','el nombre de la vida']

console.warn(" ------- For tradicional ------- " );

/*
* Inicialización
* Condición
* Incremento
*/

for ( let i = 0; i < libros.length; i++) {
    console.log(libros[i]);
}


console.warn(" ------- For IN ------- " );
/**
 * Lo mismo que el of normal pero mas corgo y mas eficiente
 */

for ( let i in libros ) {
    console.log(libros[i]);
}



console.warn(" ------- For OF ------- " );

/**
 * utilizado para optener referencia de valores de objetos
 * No se acostumbra a nombrar la variable del FOR OF con i o  j 
 * se acostumbra a nombrarla con el singular del objeto o arregle 
 * ejemplo: 
 * (let i of casas) ❌
 * (let casa of casas) ✅
 */

for ( let libro of libros ) {
    console.log(libro); // no se necesita agregar la posicion solo la variable 
}



console.log( ' -------  ejercisios  ------ ' );

const user = { name: "Andrés", age: 25 };
for (let key in user) {
    console.log(key, user[key]);
}



