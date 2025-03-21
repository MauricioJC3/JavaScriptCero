/*
* Dias de semana abrimos a las 11:00 am
* pero los fines de semana abrimos a las 10:00 am
*/

const dia = 0;
const horaActual = 10;

let horaApertura;
let mensaje; // Esta abierto, Esta cerrado , hoy abrimos a las xxxx 

// if ( [0,6].includes(dia))
//     {
//         console.log('dias festivos');
//         horaApertura = 10;
//     }else {
//         console.log('dias en la semana');
//         horaApertura = 11;
//     }

// if ( horaActual >= horaApertura ) 
//     {
//         mensaje = 'Esta abierto';
//     } else {
//         mensaje = `Esta cerrado hoy abrimos a las ${horaApertura} am`;
//     }



horaApertura = [0,6].includes(dia) ? 10 : 11;
mensaje = horaActual >= horaApertura ? 'Esta abierto' : 'Esta cerrado hoy abrimos a las ' + horaApertura + ' am';


    console.log({horaApertura, mensaje});