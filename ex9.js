const palavra1 = "Roma";
const palavra2 = "Amor";

function preparar(texto) {
    return texto.toLowerCase().split("").reverse().join("")
}
console.log(preparar(palavra1))