const regresaTrue = () => {
    console.log('regresa true');
    return true;
}


const regresaFalse = () => {
    console.log('regresa false');
    return false;
}

console.warn('Not a la negacion');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true

console.log( !regresaTrue() ); // false
console.log( !regresaFalse() ); // true

// operador
console.warn('And'); // true si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && false ); // false 
console.log( true && !false ); // true 
console.log( true && !true ); // false 

console.log('------------------- && ----------------------');

// como la primera funcion regresa false, lo que haya despues de esta no se va a ejecutar
console.log( regresaFalse() && regresaTrue() ); // false

// Si la primera funcion regresa true, entonces se ejecuta la segunda funcion
console.log(  regresaTrue() && regresaFalse() ); // regresa ambos resultados

// Tambien es aceptable hacer esto
regresaTrue() && regresaFalse();


console.log('------------------- || ----------------------');

// true si al menos un valor es verdadero
console.warn(' OR '); 

console.log( true || true ); // true
console.log( true || false ); // true
console.log( false || true ); // true   
console.log( false || false ); // false

regresaTrue() || regresaFalse(); // true
regresaFalse() || regresaTrue(); // regresa los dos valores


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'hola mundo'; // sale el ultimo valor ya que tiene un valor propio
const a2 = 'hola' && 'mundo'; // devuelve mundo ya que es un valor propio
const a3 = 'hola' && 'mundo' && soyFalse && true; // devuelve false ya que cada cosa tiene su propio valor
const a4 = soyFalse || 'ya no soy falso'; // devuelve ya no soy falso ya que este tiene un valor de true

/*
- devuelve ya no soy falso de nuevo ya que este tiene un valor de true
- tanto undefined como null como false no tienen valor
- si coloco algo despues de la cadena de texto en este caso no se ejecutara lo otro
ya que la cadena de texto cumplio primero la condicion
- si hay algo antes que cumpla con la condicion, se ejecutara
*/
const a5 = soyFalse || soyUndefined || soyNull || 'ya no soy falso de nuevo'; 
// const a5 = soyFalse || soyUndefined || soyNull || 'ya no soy falso de nuevo' || true; 

console.log({ a1, a2, a3, a4, a5 });


