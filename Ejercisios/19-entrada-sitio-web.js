
/*
* Si el usuario tiene más de 18 años, puede entrar.
* Si tiene entre 13 y 17 años, necesita permiso de un adulto.
* Si tiene menos de 13 años, no puede entrar.
*/

const edadWeb = (edad) => {
    if (edad < 13) {
        console.log("Lo sentimos, usted no tiene la edad necesaria para entrar a este sitio web.");
    }else if (edad == 13 || edad <= 17) {
        console.log("Lo sentimos, necesita un permiso de adulto para entrar a este sitio web.");
    }else {
        console.log("Bienvenido a este sitio web.");
    }

    return edad;

}


edadWeb(12)
