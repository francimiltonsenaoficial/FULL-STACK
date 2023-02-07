//retorna um novo array filtrando elementos do array de acordocom algum critério a ser definido.
//retorna um novo Array(naomodifica o original)
//O callback tem 3 argumentos: item atual, o indice e o ArrayQuando o callback retorna true o elemento Fica 
//quando retorna false o elemento sai
//O callback é chamado para cada item que existia inicialmente. Elementos  adicionados posteriormente não são chamados.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//apenas os maiores que 5

const arrayFiltrado = array.filter((x) => {
    if (x > 5) {
        return true;
    }else{
        return false;
    }
});

console.log(arrayFiltrado);