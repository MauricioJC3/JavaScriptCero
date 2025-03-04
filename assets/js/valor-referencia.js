
// (...nombre_variable) los tres puntos son para pasar argumentos 
// se le conoce como operador spread
// cuando se utiliza dentro de parentesis es para u
// cuando se utiliza en otro lugar es para separar los argumentos



// Todos los primitives son pasados por valor
let a = 10;
let b = a;
a = 20; // se le reasigna un nuevo valor a ( a )
console.log({a, b});

// en javascript todos los objetos son pasados por referencia
let mauricio = { nombre: "Mauricio"};
let ana      = { ...mauricio };
ana.nombre   = "ana"; // se le reasigna un nuevo valor

console.log({ mauricio, ana });

// Funcion
// parametro rest averiguar (...persona)
const cambiarNombre = ( { ...persona } ) => {
    persona.nombre  = 'Andres';
    return persona;
}

let kioji = { nombre: "Kioji" };
let jiota = cambiarNombre( kioji ); // se le reasigna un nuevo valor

console.log({ kioji, jiota });

// Arreglos

const frutas = ['Manzana', 'Pera', 'Naranja', 'Limón', 'Mango'];

// se crea una copia de la variable
// pero se separan los elementos
// const otrasFrutas = [...frutas]; // forma #1
const otrasFrutas = frutas.slice(); // forma #2

otrasFrutas.push('fresa');

console.table( [frutas, otrasFrutas] );