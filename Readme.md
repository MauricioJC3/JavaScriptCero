# Ejercicios de Fundamentos de Javascript

## Variables y Constantes

### 1. Suma de dos números
   - Declara dos variables `num1` y `num2` con valores numéricos.
   - Suma ambos valores y muestra el resultado en la consola.

### 2. Intercambio de valores
   - Declara dos variables `a` y `b` con valores diferentes.
   - Intercambia sus valores sin asignarlos directamente.

### 3. Área de un rectángulo
   - Crea dos constantes `base` y `altura` con valores numéricos.
   - Calcula el área (`base * altura`) y muéstrala en la consola.

---

## Funciones

### 4. Función de saludo
   - Crea una función `saludar(nombre)` que reciba un nombre y devuelva `"Hola, nombre!"`.

### 5. Conversión de temperatura
   - Crea una función que convierta grados Celsius a Fahrenheit:
     \[
     F = (C \times 9/5) + 32
     \]

### 6. Número par o impar
   - Escribe una función que reciba un número y devuelva `"Par"` o `"Impar"`.

### 7. Multiplicación con función
   - Crea una función `multiplicar(a, b)` que devuelva el resultado de `a * b`.

---

## Práctica combinada

### 8. Calculadora básica
   - Crea una función que reciba tres parámetros: `num1`, `num2` y `operador` (`+`, `-`, `*`, `/`).
   - Devuelve el resultado de la operación correspondiente.

### 9. Promedio de tres números
   - Escribe una función `promedio(n1, n2, n3)` que devuelva el promedio de tres números.

### 10. Doble y triple de un número
   - Crea una función `calcular(num)` que retorne un objeto con el doble y el triple de `num`.


---

# Más Ejercicios de JavaScript para Principiantes

## Variables y Constantes

### 1. Concatenación de cadenas
   - Declara dos variables `nombre` y `apellido` con tu nombre y apellido.
   - Une ambas variables en una tercera variable `nombreCompleto` y muestra el resultado en la consola.

### 2. Operaciones con números
   - Declara una variable `numero` con un valor inicial.
   - Usa operadores (`+`, `-`, `*`, `/`, `%`) para modificar su valor y muestra cada resultado.

### 3. Conversión de tipos
   - Declara una variable `edad` como string y conviértela a número.
   - Luego, convierte un número en string y muestra ambos resultados en la consola.

---

## Funciones

### 4. Función de mayor número
   - Crea una función `mayor(a, b)` que reciba dos números y devuelva el mayor de los dos.

### 5. Función de longitud de texto
   - Crea una función `longitudTexto(texto)` que reciba una cadena y devuelva la cantidad de caracteres.

### 6. Función de potencia
   - Crea una función `potencia(base, exponente)` que devuelva el resultado de elevar la base al exponente.

### 7. Conversión de minutos a segundos
   - Escribe una función `convertirMinutos(minutos)` que reciba un número y devuelva la cantidad de segundos.

---

## Práctica combinada

### 8. Verificación de edad para conducir
   - Crea una función `puedeConducir(edad)` que devuelva `"Sí"` si la edad es mayor o igual a 18 y `"No"` en caso contrario.

### 9. Inversión de texto
   - Escribe una función `invertirTexto(texto)` que reciba una cadena y la devuelva al revés.

### 10. Contador de vocales
   - Crea una función `contarVocales(texto)` que reciba una cadena y devuelva el número de vocales que contiene.

## Práctica tercera tanda


### 2️⃣ Determinar si una persona puede votar
```javascript
/*
* Si la persona tiene 18 años o más, puede votar.
* Si tiene menos de 18 años, no puede votar.
*/

```

### 3️⃣ Determinar el descuento en una compra
```javascript
/*
* Si el cliente compra más de $100, se le da un 10% de descuento.
* Si compra menos de $100, no recibe descuento.
*/

```


4️⃣ Convertir una temperatura de Celsius a Fahrenheit
```javascript
/*
* Para convertir de Celsius a Fahrenheit usamos la fórmula:
* Fahrenheit = (Celsius × 9/5) + 32
*/

```


5️⃣ Comprobar si un año es bisiesto
```javascript
/*
* Un año es bisiesto si es divisible por 4.
* Pero si también es divisible por 100, no es bisiesto,
* a menos que también sea divisible por 400.
*/

```


6️⃣ Determinar el mayor de dos números
```javascript
/*
* Si el primer número es mayor que el segundo, imprimirlo.
* Si el segundo número es mayor, imprimirlo.
* Si ambos son iguales, imprimir "Los números son iguales".
*/

```


7️⃣ Determinar si un número es positivo, negativo o cero
```javascript
/*
* Si el número es mayor que 0, imprimir "Positivo".
* Si el número es menor que 0, imprimir "Negativo".
* Si el número es igual a 0, imprimir "Cero".
*/

```


8️⃣ Validar si una contraseña es segura
```javascript
/*
* Una contraseña es segura si tiene al menos 8 caracteres.
* Si tiene menos de 8 caracteres, imprimir "Contraseña insegura".
* Si tiene 8 o más, imprimir "Contraseña segura".
*/

```


9️⃣ Determinar si un número es múltiplo de 3 y/o 5
```javascript
/*
* Si el número es múltiplo de 3, imprimir "Fizz".
* Si el número es múltiplo de 5, imprimir "Buzz".
* Si el número es múltiplo de ambos, imprimir "FizzBuzz".
* Si no es múltiplo de ninguno, imprimir el número.
*/

```

🔟 Calcular el precio final con IVA
```javascript
/*
* Si el producto cuesta más de $50, se le aplica un IVA del 19%.
* Si cuesta $50 o menos, se le aplica un IVA del 10%.
* Mostrar el precio final con IVA incluido.
*/

```

1️⃣1️⃣ Determinar si un usuario puede entrar a un sitio web
```javascript
/*
* Si el usuario tiene más de 18 años, puede entrar.
* Si tiene entre 13 y 17 años, necesita permiso de un adulto.
* Si tiene menos de 13 años, no puede entrar.
*/

```

1️⃣2️⃣ Determinar si una palabra es larga o corta
```javascript
/*
* Si la palabra tiene más de 10 caracteres, imprimir "Palabra larga".
* Si tiene 10 o menos caracteres, imprimir "Palabra corta".
*/

```

1️⃣3️⃣ Comprobar si un usuario está registrado
```javascript
/*
* Si el nombre de usuario no está vacío, imprimir "Bienvenido, [nombre]".
* Si está vacío, imprimir "Por favor, ingresa tu nombre de usuario".
*/

```

1️⃣4️⃣ Comparar dos cadenas de texto
```javascript
/*
* Si las dos cadenas son iguales, imprimir "Las cadenas son iguales".
* Si no son iguales, imprimir "Las cadenas son diferentes".
*/

```