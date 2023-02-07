//O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida.
//Este método retorna um valor booleano.

//array.every(callback[, thisArg]);

const numeros = [1, 2, 20, 4, 5];

console.log(numeros.every(x => x < 10));