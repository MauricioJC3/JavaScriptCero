
// What are cycles?

const carros = ['Toyota', 'Ford', 'Nissan', 'Audi', 'BMW'];

let i = 0; // indexe para comenar el recorrido

// Forma #1
// while ( i < carros.length ) {
//     console.log(carros[i]);
//     // esta linea toma i y le incrementa 1 
//     i++; // siempre debe ir el incremento
// }


// Forma #2

// while ( carros[i] ) {
//     console.log(carros[i]);
//     i++;
// }


// Forma #3 Con condicion 

while (carros[i]) { 
    if (i === 1) {
        break; // Solo se romperá el ciclo en el índice 1
    }
    console.log(carros[i]); // Imprime el valor de 'carros[i]' antes del 'break'
    i++;
}


console.log( ' -------  Do While ------ ' );

let j = 0 

do {

    console.log(carros[j]);
    j++;

} while ( carros[j] );










