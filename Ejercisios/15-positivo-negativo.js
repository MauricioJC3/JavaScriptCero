/*
* Si el número es mayor que 0, imprimir "Positivo".
* Si el número es menor que 0, imprimir "Negativo".
* Si el número es igual a 0, imprimir "Cero".
*/


const tipoNumero = (numero) => {
    if (numero > 0){
        console.log(`El numero ${numero} es positivo`);
    }else if (numero < 0) {
        console.log(`El numero ${numero} es negativo`);
    }else {
        console.log(`el numero que ingreso es ${numero}`);
    }
}

tipoNumero(3);


