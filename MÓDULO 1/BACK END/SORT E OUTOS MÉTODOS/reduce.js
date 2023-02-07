//EXEMPLO COM for de C

//const array = [1, 2, 3, 4, 5];

//let somaTotal = array[0];

//for (let i = 1; i < array.length; i++) {
  //  let item = array[i];
    //somaTotal = somaTotal + item;
//}

//console.log(somaTotal);

//EXEMPLO COM reduce:

const array = [0, 1, 2, 3, 4, 5];

const somaTotal = array.reduce((acc, item) => acc + item);

console.log(somaTotal);

//espero retorno 15