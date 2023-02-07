const array = [1, 2, 3, 10, 7, 5];

//ENCONTRAR O MAIOR ITEM DSSE ARRAY utilizando for de C:

// let maior = array[0];

// for (let i = 1; i < array.length; i++) {
//     let item = array[i];

//     if (item > maior) {
//         maior = item;
//     }
// }

// console.log(maior);

//ENCONTRAR O MAIOR ITEM DESSE ARRAY com reduce:

const maior = array.reduce((acc, item) => item > acc ? item : acc)

console.log(maior);

