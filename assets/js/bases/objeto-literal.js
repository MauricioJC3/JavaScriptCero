let personaje = {
    nombre: "cristiano ronaldo",
    oficio: "Futbolista",
    edad: 40,
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

console.table( personaje );
console.table("Nombre: " + personaje.nombre)
console.table("edad: " + personaje["edad"])
console.table("direccion: " + personaje.direccion.calle)

// ejercisio basico: consultar el numero de guallos
console.table("No.Guallos: " + personaje.guallos.length);

// ejercisio basico: consultar el ultimo guallo
console.table("Ültimo guallo: ", personaje.guallos[ personaje.guallos.length - 1 ]);

const estandarConsulta = "estandar";
console.log("Estándar: " + personaje[estandarConsulta]);

// Mas detalles sobre el objeto literal

// Borrar una propiedad
delete personaje.edad;
console.table( personaje);

personaje.casado = true;

// Consulatr cada propiedad

const entriesParams = Object.entries(personaje);
console.table(entriesParams);

// congela el objeto para que no se pueda modificar su contenido y agregar nuevas propiedades
Object.freeze(personaje);

// por eso si agregamos dinero no aparecera en la tabla
personaje.dinero = 1000;

// No funcionara porque el frezzo no permite modificar el objeto
personaje.casado = false;

console.table(personaje);

// listar las propiedades del objeto
const propiedades = Object.getOwnPropertyNames(personaje);
// Mostrar los valores
const valores     = Object.values(personaje); 
console.log(propiedades , valores);

