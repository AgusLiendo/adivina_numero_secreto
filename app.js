const readlineSync = require('readline-sync');
const {generarNumero,verificarAdivinanza} = require('./adivinanza');

const obtenerNumero = () => {
    return readlineSync.question('Ingrese un numero: ');
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumero();
    let numeroAdivinado = 0;

    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el número del 1 al 100.');


    while (numeroAdivinado != numeroSecreto) {
        numeroAdivinado = obtenerNumero();
        verificarAdivinanza(numeroSecreto,numeroAdivinado);
    }
}

juegoAdivinanza()