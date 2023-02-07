//Álvaro está economizando para uma comprar uma passagem para a europa.
//Por isso diariamente  ele coloca um valor no cofre. 
//Faça um programa que calcule o total acumulado no cofre até o momento.

//input format = a entrada será sempre uma lista de inteiros positivos
//constraints = a lista pode conter até 1000 inteiros positivos.
//output format = imprima na tela o total acumulado nessa lista.

//simple input 0 = 1234
//simple output 0 = 10

function solucao(lista) {
    const total = lista.reduce((acc, cur) => acc += cur);

    console.log(total)
}

const entrada = [1, 2, 3, 4, 200, 500, 5000];
solucao(entrada);