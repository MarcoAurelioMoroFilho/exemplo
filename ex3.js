let lista = [10,234,5,324,20,3]

let menor = lista[0]

lista.forEach(n => {
    if (n<menor){
        menor=n
    }
});

console.log("O menor elemento da lista é: "+ menor);
