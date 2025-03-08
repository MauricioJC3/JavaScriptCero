/*
* Si el primer número es mayor que el segundo, imprimirlo.
* Si el segundo número es mayor, imprimirlo.
* Si ambos son iguales, imprimir "Los números son iguales".
*/


const mayor = (a,b) => {
    if (a > b){
        console.log(`el numero ${a} es mayor que el numero ${b}`);
    }else if (a < b){
        console.log(`el numero ${b} es mayor que el numero ${a}`);
    }
}


mayor(10,5);