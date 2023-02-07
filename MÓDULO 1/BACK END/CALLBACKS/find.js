//É uma método de arrays que encontra um determinado elemento num array, retornando-o

//Observação importante: É retornado apenas o primeiro elemento que atende a condição buscada

//Exercício:

const array = ["Olá", "Aoba", "paralelepipedo", "outra coisa"];

const encontrado = array.find(x => x.length > 10);

if (encontrado) {
    console.log(`A palavra com mais de 10 carácteres é ${encontrado}`);
} else {
    console.log(`Nenhum item com mais de 10 carácteres`);
}