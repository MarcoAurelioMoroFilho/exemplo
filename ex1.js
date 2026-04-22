let compras = [5,10,15,20,25]
let total = 0 
compras.forEach(preco => {
    total += preco;
});

let media = total / compras.length

console.log("O gasto total é:"+ total);
console.log("A média de gasto é:"+ media);