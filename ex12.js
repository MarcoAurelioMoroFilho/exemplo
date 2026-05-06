const valores = [5, 5, 3, 1, 4];

// 1. Remove duplicatas com Set
// 2. Ordena de forma decrescente (b - a)
const ordenados = [...new Set(valores)].sort((a, b) => b - a);

if (ordenados.length < 2) {
    console.log("Não há um segundo maior valor.");
} else {
    console.log("O segundo maior valor é:", ordenados[1]);
}