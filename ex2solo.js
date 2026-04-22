let lista = [3,4,5,6,7,8,9,10,11,12,13]
let impares = 0

lista.forEach(num => {
    if(num%2 !=0){
        impares++
    }
});
console.log(`Existem ${impares} números impares.`);