const fraseMin = "aprender javascript é muito legal";
const palavrasFrase = fraseMin.split(" ");

const capitalizada = palavrasFrase.map(palavra => {
    return palavra[0].toUpperCase() + palavra.slice(1);
}).join(" ");

console.log("Frase formatada:", capitalizada);