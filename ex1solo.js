let compras = [10,20,30,40,50]
let total = 0
compras.forEach(preco => {
    total += preco
});

let media = total / compras.length
console.log("O total é "+ total)
console.log("A média é "+ media)