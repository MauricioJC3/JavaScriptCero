///////////////////////////////////////
            // Funciones        
///////////////////////////////////////

// Funciones tradicionales
function saludar(nombre){
    // solo las funciones tradicionales soportan el arguments
    console.log(arguments);
    console.log(`hola mundo ${nombre}`);
    return 1;

}

// Funciones anónimas
const saludar2 = function (apellidos){
    console.log("hola mundo dos " + apellidos);
}


// Funcion flecha
const saludar3 = (edad) => {
    console.log("hola mundo tres " + edad);
}

const retornoDeSaludar = saludar("mauricio");
console.log({retornoDeSaludar});

saludar2("Jimenez Chavez");
saludar3(21 );

const suma = (a, b) => {
    return a + b;
}

// Funcion de flecha resumida, solo cuando se va a devolver un return
const suma2 = (a, b) => a + b;

const getRandom = () => Math.random();


console.table( ["Suma1: " + suma(3,3), "Suma2: " + suma2(4,5), "Numero aleatorio: " + getRandom()] );