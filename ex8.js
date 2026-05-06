const frase = "o sol brilha e o sol aquece";
const palavras = frase.toLowerCase().split(" ");
const contagem = {};

palavras.forEach(palavra => {
    if (contagem[palavra]) {
        contagem[palavra]++;
    } else {
        contagem[palavra] = 1;
    }
});

console.log("Relatório de Frequência:");
for (let palavra in contagem) {
    console.log(`${palavra}: ${contagem[palavra]}`);
}