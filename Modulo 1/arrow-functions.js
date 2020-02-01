const arr = [1, 3, 4, 5, 6];

const newArr = arr.map( item => item *2)


console.log(newArr);

//////

const teste = () =>  'teste';
console.log(teste())

/**
 * mesma coisa que 
 * const teste = function() {
 * return 'teste;
 * }
 */

 //com objeto

 const teste2 = () => ({nome: 'Renato'});

 console.log(teste2());

 /**
  * Funções mais curtas
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map(function(element) { 
  return element.length; 
}); // esta sentença retorna o array: [8, 6, 7, 9]

// A função regular acima pode ser escrita como a arrow function abaixo
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// Quando só existe um parâmetro, podemos remover os parênteses envolvendo os parâmetros:
elements.map(element => {
  return element.length;
}); // [8, 6, 7, 9]

// Quando a única sentença em uma arrow function é `return`, podemos remover `return` e remover
// as chaves envolvendo a sentença
elements.map(element => element.length); // [8, 6, 7, 9]

// Neste caso, porque só precisamos da propriedade length, podemos usar o parâmetro de destruição (destructing parameter):
// Note que a string `"length"` corresponde a propriedade que queremos obter enquanto que a
// obviamente propriedade não especial `lengthFooBArX` é só o nome de uma variável que pode ser mudado
// para qualquer nome válido de variável que você quiser
elements.map(({ "length": lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

// Esta atribuição de parâmetro de destruição (destructing parameter) pode ser escrita como visto abaixo. Entretanto, note que
// não há um específico `"length"` para selecionar qual propriedade nós queremos obter. Ao invés disso, o nome literal
// da própria variável `length` é usado como a propriedade que queremos recuperar do objeto.
elements.map(({ length }) => length); // [8, 6, 7, 9]
  */