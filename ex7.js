const numeros = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const unicos = numeros.filter((num) => {
    // Se a primeira posição onde ele aparece for igual à última, ele é único
    return numeros.indexOf(num) === numeros.lastIndexOf(num);
});

console.log("Elementos únicos:", unicos);
// Resultado esperado: [1, 3, 5]