// 2. Intercambio de valores
// - Declara dos variables `a` y `b` con valores diferentes.
// - Intercambia sus valores sin asignarlos directamente.


let a = 3;
let b = 5;

let temp = a; // Se pueden utilziar las variables temporales
a = b;
b = temp;

// // Forma dos con desestructurado sin varaibles temporales
// se crea un array con dos elementos [b,a]
// [a,b] = [b,a]

console.log(a, b);