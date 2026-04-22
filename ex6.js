let lista= [ 23,23,323,54,45,7,6,76,45,60,3454,8,435,34,345,12,1,24,4,4,4]
let impares = []
let soma = 0 
lista.forEach(num => {
    if(num%2 !==0){
        soma+=num
        impares.push(num)
    }    
    
});
console.log("A lista é: "+ impares);
console.log("A soma é: "+soma);