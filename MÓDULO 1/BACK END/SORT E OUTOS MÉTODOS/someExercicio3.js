//Faça um programa que verifica se num array há algum quadrado perfeito.
//A definição de um  número quadrado perfeito pode ser entendida como: um número natural inteiro positivo, cuja raiz quadrada é, também, um número natural inteiro positivo.

const array = [2, 3, 5];

const resultado = array.some(x => Math.sqrt(x) >= 0 && Math.sqrt(x) % 1 === 0);

console.log(resultado);