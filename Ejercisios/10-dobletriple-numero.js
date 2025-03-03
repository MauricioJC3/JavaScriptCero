// 10. Doble y triple de un número
//    - Crea una función `calcular(num)` que retorne un objeto con el doble y el triple de `num`.

const calcular = (num) => {
    return {
        doble: num * 2, // doble tiene su propio valor
        triple: num * 3 // triple tiene su propio valor
    }
}

console.log(calcular(10));