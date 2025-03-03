// 8. Calculadora básica
//    - Crea una función que reciba tres parámetros: `num1`, `num2` y `operador` (`+`, `-`, `*`, `/`).
//    - Devuelve el resultado de la operación correspondiente.

// const CalculadoraBasica = (num1, num2, operador) => {
//     let resultado;
//     switch (operador){
//         case "+":
//             resultado = num1 + num2;
//             break;

//             case "-":
//                 resultado = num1 - num2;
//                 break;

//                 case "*":
//                     resultado = num1 * num2;
//                     break;

//                     case "/":
//                         resultado = num1 / num2;
//                         break;

//                         default:
//                             console.log("El operador ingresado no es valido: " + operador);
//                             break;
//     }
//     console.log(resultado);
// }

// CalculadoraBasica(3,3,"+");


        ////////////////////////////////////

        // Calculadora resiviendo los parametros con prompt
        // importarte convertir a NUmber los numero

        ///////////////////////////////////



const operator = prompt("Ingrese el operador que desa usar ", ["+", "-", "*", "/"]);
const num3 = Number(prompt("Ingrese el primer numero ")); 
const num4 = Number(prompt("Ingrese el segundo numero "));

const calcu = (num3, num4, operator) => {	
    let resu;
    switch (operator){
        case "+":
            resu = num3 + num4;
            break;
        case "-":
            resu = num3 - num4;
            break;
        case "*":
            resu = num3 * num4;
            break;
        case "/":
            resu = num3 / num4;
            break;
        default:
            console.log("El operador ingresado no es valido: " + operator);
            break;
    }
    console.log(resu);
}

calcu(num3, num4, operator);