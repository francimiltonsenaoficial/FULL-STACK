//O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string retornando true ou false.

//SINTAXE

structuredClone.includes(searchString[position])

//Parâmetros

//searchString
//É o conjunto de caracteres que será pesquisado dentro desta string.

//position
//Opcional. É um número inteiro que indica por onde a busca iniciará, referente ao índice da string a ser pesquisada. O valor padrão é 0.

//Valor retornado
//true se o conjunto de caracteres for encontrado em algum lugar dentro da string sendo pesquisada. Do contrário, retorna false.

//Descrição
//Este método permite conferir se uma string contém um determinado conjunto de caracteres.

//Case-sensitivity
//O método includes() é case sensitive. Por exemplo, a seguinte expressão retorna false:

'Bandeira do Brasil'.includes('brasil'); // retorna false
//Copy to Clipboard
//Exemplos
//Utilizando includes()
var str = 'Ser, ou não ser, eis a questão.';

console.log(str.includes('Ser'));         // true
console.log(str.includes('questão'));     // true
console.log(str.includes('não existe'));  // false
console.log(str.includes('ser', 1));      // true
console.log(str.includes('SER'));         // false
//Copy to Clipboard
//Implementação
//Este método foi adicionado à especificação ECMAScript 6 e pode não estar disponível em todas as implementações JavaScript. No entanto, você pode facilmente implementar este método:

if (!String.prototype.includes) {
  String.prototype.includes = function() {'use strict';
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}
