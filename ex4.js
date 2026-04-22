const prompt = require('prompt-sync')();
let texto = prompt("Digite o texto: ")

let vogais = "aeiouAEIOU"

let consoantes = []

for (let i =0; i< texto.length; i++){
if (!vogais.includes(texto[i])){
consoantes.push(texto[i])
}

}
console.log(consoantes);