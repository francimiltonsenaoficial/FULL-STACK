//Faça um programa que verifica se existe algum elemento par num array.

const array = [1, 2, 3, 5, 7, 9];

const temPar = array.some(x => x % 2 === 0);

console.log(temPar);

