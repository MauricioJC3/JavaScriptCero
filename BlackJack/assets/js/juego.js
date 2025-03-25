
let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A','J', 'Q', 'K'];

let puntosjugador = 0;
let puntoscomputador = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputador = document.querySelector('#computadora-cartas');
const puntosHTML = document.querySelectorAll('small');

// Esta funcion crea un nuevo deck de cartas
const crearDeck = () => {

    for ( let i = 2; i <= 10; i++ ) {
        for (let tipo of tipos){
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo );
        }
    }

    // console.log(deck); // como se ve el deck ordenado
    // console.log(" --------- Shuffled --------- ");
    deck = _.shuffle( deck );
    console.log( deck );

    return deck;
}

crearDeck();


// Esta fucion me permite pedir una carta

const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
        const carta = deck.pop();

    return carta;
}

// deck = []; // para poner a pruba de que si el deck esta vacio se no se ejcute el codigo
// ejemplo para que haga un recorrido hasta que se acaben las cartas
// for (let i = 0; i <= 100; i++) {
//     pedirCarta();
// }

// pedirCarta();

const valorCarta = (carta) => {
    // se comienca por el indice 0 y se le dice que mire el tamano del string de la carta y le reste uno para que el ultimo digito o letra no aprezca
    const valor = carta.substring(0, carta.length -1); 

    // se utiliza un ternario con varias condiciones
    // un ternario puede tener varias condiciones y una sola expresion
   return ( isNaN(valor) ) ?
           ( valor === 'A') ? 11 : 10 
           : valor * 1;
}

//Eventos
// collback funcion que se pasa como argumento

btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();
    puntosjugador = puntosjugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosjugador;

    const imgcarta = document.createElement('img');
        imgcarta.src = `assets/cartas/${carta}.png`;
        imgcarta.classList.add('carta');
        divCartasJugador.append( imgcarta );

        if ( puntosjugador > 21 ) {
            console.warn('Jugador perdio');
            btnPedir.disabled = true;
        } else if ( puntosjugador === 21) {
            console.info('Jugador ha gano');
            btnPedir.disabled = true;
        }
});









