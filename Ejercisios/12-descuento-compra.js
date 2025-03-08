/*
javascript
* Si el cliente compra más de $100, se le da un 10% de descuento.
* Si compra menos de $100, no recibe descuento.
*/

let precioTotal = 100;
// let descuento;  // Para optimizar el código, se elimina esta variable ya que solko se utiliza en un bloque de codigo 

if (precioTotal < 100)
{
    console.log(`No recibe descuento su precio a pagar es de: ${precioTotal} `);

} else 
{
            //Se declara la variable que se utilizara para el descuento
            let descuento = precioTotal * 0.1; // se realiza el 10% de descuento
            precioTotal = precioTotal - descuento; // se resta del valor total el descuento
            console.log(`Recibira un descuento del: ${descuento}%. El precio total a pagar es de: ${precioTotal}`)
}



