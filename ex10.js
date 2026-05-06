const lista = [10, 5, 1, 8, 2, 1]; 
// Ordenada e sem duplicatas: [1, 2, 5, 8, 10]

const listaOrdenada = [...new Set(lista)].sort((a, b) => a - b);

if (listaOrdenada.length < 2) {
    console.log("Lista muito curta para calcular.");
} else {
    const maior = listaOrdenada[listaOrdenada.length - 1];
    const segundoMenor = listaOrdenada[1];
    const amplitude = maior - segundoMenor;

    console.log(`Maior: ${maior}, Segundo Menor: ${segundoMenor}`);
    console.log(`Amplitude: ${amplitude}`);
}