// 8. Calculadora básica
//    - Crea una función que reciba tres parámetros: `num1`, `num2` y `operador` (`+`, `-`, `*`, `/`).
//    - Devuelve el resultado de la operación correspondiente.

const CalculadoraBasica = (num1, num2, operador) => {
    let resultado;
    switch (operador){
        case "+":
            resultado = num1 + num2;
            break;

            case "-":
                resultado = num1 - num2;
                break;

                case "*":
                    resultado = num1 * num2;
                    break;

                    case "/":
                        resultado = num1 / num2;
                        break;

                        default:
                            console.log("El operador ingresado no es valido: " + operador);
                            break;
    }
    console.log(resultado);
}

CalculadoraBasica(3,3,"+");
