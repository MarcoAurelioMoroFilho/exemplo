const prompt = require('prompt-sync')();
let resultado = ""
let frase = prompt("Digite sua frase para remover os espaços:  ")
for(let i=0; i<frase.length; i++){
    if(frase[i]!== " "){
        resultado += frase[i]

    }
}
console.log("Resultado: "+resultado);