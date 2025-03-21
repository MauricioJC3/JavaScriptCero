const elMayor = (a, b) => (a > b) ? a : b;
console.log(elMayor(10, 67));


const elLargo = (pal, pal2) => (pal.length > pal2.length) ? pal : pal2;
console.log( elLargo('hola', 'adiossss') );

const esMienbro = (miembro) => ( miembro ) ? 'te costara 2 dolares' : 'te costara 5 dolares';
console.log( esMienbro(true) );

const equipo = true;
const jugadoresArrr = [
    'Cristiano Ronaldo',
    'Lionel Messi',
    'Neymar',
    'mohamed salah',
    equipo ? 'Maradona' : 'Pele',
]

console.log(jugadoresArrr);

let nota = 20;
const notaFinal = nota >= 80 ? 'A+' : 
                  nota >= 85 ? 'A'  : 
                  nota >= 80 ? 'B+' : 
                  nota >= 75 ? 'B'  : 
                  nota >= 70 ? 'C+' : 
                  nota >= 65 ? 'C'  : 
                  nota >= 60 ? nota :'F';

                  console.log(notaFinal);
