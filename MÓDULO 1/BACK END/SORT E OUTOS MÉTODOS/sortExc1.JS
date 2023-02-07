const numeros = [1, 10, 2, 23, 5, 100];

//ordenar em ordem Decrescente

//- A vem primeiro
// + B vem primeiro 

numeros.sort((b, a) => {
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0;
    }
});

//numeros.sort((a, b) => b - a);

console.log(numeros);