function crearPersona(nombre, apellido){
    // se crea un objeto con los parametros recibidos
    // no es necesario repetir el nombre de los parametros
    // ya que ecmascript o javascript lo sabe
    return {
        nombre,
        apellido
    }
}

// como funcion de flecha
// Tiene que agregarse lo que se va a devolcer dentro de parentesis para que pueda funcionar
const creatPersona2 = (nombre, apellido) => ({nombre, apellido});


const persona = crearPersona("Mauricio", "Jimenez Chavez");
const persona2 = creatPersona2("Mauricio", "Jimenez Chavez");

console.table(persona);
console.table(persona2);


function imprimeArguments(){
    console.log(arguments);
}

// si se neceita trabajar con los argumentos en una funcion de flecha
// se debe hacer lo siguinte
// crea un arreglo con todos los argumentos que se pasen a la funcion
// (...) los tres puntos son un parametro reservado que indica que se quiere pasar todos los argumentos,
// no puede ir nada despues de eso
// cuando se quiera pasar un parametro se tiene que agregar entes del argumento
const imprimeArguments2 = (edad, ...args) => {
    return args;         
}

imprimeArguments(1,true,"hola");

const [casado, vivo, dinero] = imprimeArguments2(21,false,"chao");
console.table({casado, vivo, dinero});

// se muestra los argumentos agregados 
const {apellido:nuevoApellido} = creatPersona2("Mauricio", "Jimenez Chavez");
console.table({nuevoApellido});

                   /////////////////////////////////
                    // desestructurar de argumentos
                   ////////////////////////////////

let superheroes = {
    nombre: "cristiano ronaldo",
    oficio: "Futbolista",
    // edad: 40,
    equipo: "AL Nassar",
    estado: true,
    estandar: "vivo",
    direccion: {
        calle: "calle do rio",
        numero: 123,
        ciudad: "andorinha",
        pais: "portugal",
    },
    cordenadas: {
        longitud: 123,
        latitud: 123,
    },
    guallos: ["nike", "adidas", "pumas"],
};

// agregando llaves {}, se podran extraer las propiedades que se quieran del objeto
// si la edad no existe se devuelve undefined pero se puede pasar un valor por defecto
const imprimirPropiedades = ( {nombre, edad = 21, equipo,estandar}) => {
    console.table({nombre});
    console.table({edad});
    console.table({equipo});
    console.table({estandar});
}

imprimirPropiedades(superheroes);