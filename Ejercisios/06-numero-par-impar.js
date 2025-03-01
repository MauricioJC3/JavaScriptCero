// 6. Número par o impar
//    - Escribe una función 
// que reciba un número y devuelva `"Par"` o `"Impar"`
// formula para saber numero par: numero % 2===0
// formula para saber numero impar: numero % 2===0

const numeroParImpar = (numero) => {
     if (numero % 2 === 0) {
        console.log("Par");
     }else {
        console.log("Impar");
     }
}

numeroParImpar(2);