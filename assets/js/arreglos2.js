/**
 * Propiedades de un arreglo -> variable que va dentro de los arreglos
 * metodos de un arreglo -> funciones internas de los arreglos, se ejecutan poniendose un parantesis ()
 * Basicos de un arreglo
 */

let juegos = ['Super Mario Bros.', 'Mario Kart', 'Super Smash Bros.', 'test'];

console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[ juegos.length - 1 ];

console.log('Primero juego: ', {primero}, 'Ultimo juego: ', {ultimo});

// recorre todo los elementos del arreglo
juegos.forEach( (elemento, indice, arr) => {
    console.log( elemento, indice, arr);
});

// ingresa un nuevo elemento al final del arreglo
let nuevaLongitud = juegos.push( 'dragon city' );
console.log('Nueva longitud: ', {nuevaLongitud}, juegos);

// ingresa un nuevo elemento al principio del arreglo
nuevaLongitud = juegos.unshift( 'genshin impact' );
console.log('Nueva longitud: ', {nuevaLongitud}, juegos);

// borra el ultimo elemento del arreglo
let juegoBorrado = juegos.pop();
console.log('Juego borrado: ', {juegoBorrado}, juegos);

// borrar un elemento de una posicion especifica
let pos = 1;

let JuegosBorrados = juegos.splice(pos, 2);
console.log('Juegos borrados: ', {JuegosBorrados}, juegos);

// saber el indeice de un elemento
let saberIndice = juegos.indexOf('test'); // es case sensitive
console.log('Indice: ', {saberIndice});

// TODO: Referencia
