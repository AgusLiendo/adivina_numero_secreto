const generarNumero = () => {
    return Math.floor(Math.random()*100)+1;
}

const verificarAdivinanza = (numeroSecreto,numeroAdivinado) => {
    if (numeroAdivinado==numeroSecreto){
        console.log("¡Felicitaciones! ¡Adivinaste el número secreto!")
    } else if (numeroAdivinado > numeroSecreto) {
        console.log("El número secreto es menor. ¡Sigue intentado!")
    } else {
        console.log("El número secreto es mayor. ¡Sigue intentado!")
    }
};

module.exports = {
    generarNumero,
    verificarAdivinanza
};