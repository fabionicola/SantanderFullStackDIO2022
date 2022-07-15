//var y = 0; // - comentário de linha - ctrl+/
/*
comentário de várias linhas - selecionar tudo e comentar - ctrl+/
*/
/*
var preco = 2;//declaração de variavel
var desconto = 0.2;
const PRECO = 2;//declaração de constante

preco = preco - desconto; //manipulação de variavel

var total = PRECO - desconto; //manipulação de constante

//declaração de função
function soma (a, b){
    //console.log(a + b);
    return a + b;
}
//manipulação de função
soma(3, 5);
*/
console.log("Hello world!");

function returnEvenValues(array){
    let evenNums = [];
    for (let i=0; i <array.length; i++){
    if(array[i] % 2 == 0){
        evenNums.push(array[i])
    }else{
        console.log(`${array[i]} não é par`);
    }

}
console.log('os numeros pares sao:',evenNums);
}

let array = [1, 2, 4, 5, 7, 8];
returnEvenValues(array);
