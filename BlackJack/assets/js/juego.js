
let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A','J', 'Q', 'K'];

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

    
    console.log(deck);
    console.log('carta ',carta);
    return 'carta';
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

const valor = valorCarta( pedirCarta() );

console.log(valor);









