const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item) {
    return item * 2; //percorre o
})
/*
    Descrição
O método map chama a função callback recebida por parâmetro para cada elemento do Array original, 
em ordem, e constrói um novo array com base nos retornos de cada chamada.
*/
console.log(newArr); // novo array com os elementos x2


const sum = arr.reduce(function(total, next) {
    return total + next;
})
/*
    Descrição
O reduce()  executa a função de callback uma vez para cada elemento presente no array, excluindo furos (valores indefinidos) , 
recebendo quatro argumentos:

o valor inicial (ou o valor do callback anterior),
o valor do elemento corrente,
o índice corrente e
o array onde a iteração está ocorrendo.
A primeira vez que o callback é chamado, o Acumulador e o valorAtual podem ter um de dois valores possíveis.
 Se o Valor Inicial tiver sido fornecido na chamada à função reduce(), então o Acumulador será igual ao valorInicial e 
 o valorAtual será igual ao primeiro valor no array. Caso nenhum valorInicial seja fornecido, 
 Acumulador será igual ao primeiro valor no array, e valorAtual será igual ao segundo.
*/
console.log(sum);//soma de todos os elementos do array


const filter = arr.filter( function(item) {
    return item % 2 === 0; //retorna true ou false,neste caso somente os elementos pares
})
/**
 * Descrição
filter() chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array com todos os valores 
 para os quais o callback retornou o valor true ou  um valor que seja convertido para true
 */

console.log(filter);



const find = arr.find(function(item) {
    return item === 4;
})
/**
 * Descrição
O método find executa a função callback uma vez para cada elemento presente no array até que encontre um onde callback  
retorne o valor true. Se o elemento é encontrado, find retorna imediatamente o valor deste elemento.
 */

console.log(find); //4

