/*
* Si el número es múltiplo de 3, imprimir "Fizz".
* Si el número es múltiplo de 5, imprimir "Buzz".
* Si el número es múltiplo de ambos, imprimir "FizzBuzz".
* Si no es múltiplo de ninguno, imprimir el número.
*/



const multiple = (numero) => {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log('FizzBuzz');
    }else if (numero % 3 === 0) {
        console.log('Fizz');
    }else if (numero % 5 === 0) {
        console.log('Buzz');
    }else {
        console.log(`El numero ${numero} no es múltiplo de 3 ni 5`);
    }
}

multiple(2);







