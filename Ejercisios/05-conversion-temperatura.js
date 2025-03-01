// 5. Conversión de temperatura
//    - Crea una función que convierta grados Celsius a Fahrenheit:
//      \[Formula\]

//      F = (C \times 9/5) + 32

//      \]

const conversionTemperatura = (gradosCelsius) => {
    let Fahrenheit = (gradosCelsius * 9/5) + 32;
    console.log(Fahrenheit);
}

conversionTemperatura(10);