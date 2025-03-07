


function tamañoPalabra(palabra) {
    if (palabra.length > 10) {
        return 'Palabra larga';
    } else {
        return 'Palabra corta';
    }
}

function a1(a3) {
    const splited = a3.split("")
    let count = 0
    for (const letter in splited) {
        if (count > 10) {
            return "larga" // la tienes
            break
        }
        count++
    }
    return "corta" // la mia
}

console.log(a1("usted"))