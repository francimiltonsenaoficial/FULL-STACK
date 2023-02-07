Array.prototype.indexOf()
//O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
//Sintaxe
array.indexOf(elementoDePesquisa, [pontoInicial = 0])
//Parâmetros

//elementoDePesquisa

//Elemento a ser pesquisado no array.

//pontoInicial
//O índice para iniciar a procura. Se o índice for maior ou igual ao tamanho do array, é retornado -1 e signfica que o item não será procurado. Se o pontoInicial é fornecido com um número negativo,  é tomado como deslocamento da extremidade do array. Nota: se o pontoInicial fornecido é negativo, a procura no array acontece de frente para trás. Se o pontoInicial fornecido é 0, então o array inteiro será pesquisado. Padrão: 0 (pesquisa em todo array).
//Descrição
indexOf() //compara o  elementoDePesquisa com os elementos do Array usando igualdade estrita (o mesmo método usado pelo ===, ou triple-equals operator). 

//Exemplos
//Usando indexOf()
//O exemplo seguinte usa indexOf() para localizar valores em um array

var array = [2, 5, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0