/*
* Una contraseña es segura si tiene al menos 8 caracteres.
* Si tiene menos de 8 caracteres, imprimir "Contraseña insegura".
* Si tiene 8 o más, imprimir "Contraseña segura".
*/

const contrasenaSegura = (contrasena) => {
    if (contrasena.length < 8) {
        console.log('Contraseña insegura, por favor ingrese otra');
    }else {
        console.log('Contrasena segura');
    }
}

contrasenaSegura('123458');




