

// const arr = new Array(10);

let musica = ['in my head', 'vanished', 'next exit', 'raimbow after rainbow', 'molchat doma'];
console.table({ musica })

console.log( "La cancion es: " + musica[1])

// Un arreglo puede contener cualquier tipo de dato y varios arreglos dentro de este mismo arreglo
let arreglos = [
    true,
    123,
    "mauricio",
    2 - 1,
    function (){},
    ()=>{},
    { a: 1},
    ['vacations','bedroom', 'crystal castle', [
        'the', 
        'last', 
        'cruise'
    ]],
];

console.table("asi se extrae un arreglo dentro de otro: " + arreglos[7][3][2]);
