/*
JavaScript

* Un año es bisiesto si es divisible por 4.
* Pero si también es divisible por 100, no es bisiesto,
* a menos que también sea divisible por 400.
*/


const bisiesto = (ano) => {
    if (ano % 400 === 0) {
        console.log('Es bisiesto');
        return true;
    } else if (ano % 100 === 0) {
        console.log('No es bisiesto');
        return false;
    } else if (ano % 4 === 0) {
        console.log('Es bisiesto');
        return true;
    } else {
        console.log('No es bisiesto');
        return false;
    }
};
console.log(bisiesto(2019));


