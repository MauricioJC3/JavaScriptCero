/*
* Si el producto cuesta más de $50, se le aplica un IVA del 19%.
* Si cuesta $50 o menos, se le aplica un IVA del 10%.
* Mostrar el precio final con IVA incluido.
*/


const precioIva = (precio) => {
    let iva;

    if (precio > 50){
        // falta variable de procentage para mostrarlo 
        iva = precio * 0.19;
        precio = precio + iva;
        console.log(`Se aplicó un IVA del ${iva} su total a pagar es de: ${precio}`);
    }else {
        iva = precio * 0.1;
        precio = precio + iva;
        console.log(`Se aplicó un IVA del ${iva} su total a pagar es de: ${precio}`);
    }
}


precioIva(50);

