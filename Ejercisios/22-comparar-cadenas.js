/*
* Si las dos cadenas son iguales, imprimir "Las cadenas son iguales".
* Si no son iguales, imprimir "Las cadenas son diferentes".
*/

const cadena1 = prompt("Ingrese la primera cadena");
const cadena2 = prompt("Ingrese la segunda cadena");

const compararCadenas = (tex1, tex2) => {
    if (cadena1 === cadena2) {
        console.log("Las cadenas son iguales");
    } else {
        console.log("Las cadenas son diferentes");
    }

}

compararCadenas(cadena1, cadena2)

