const nome = 'Francis';
const sobrenome = 'Sena';
const nome_completo = nome + " " + sobrenome;
console.log(nome_completo);


let x = 10, y = 2; //jeito certo de criar variaveis.

//Operadores aritimeticos

let resultado = x + y;
console.log("A soma de " + x + " e " + y + " é " + resultado); //12

resultado = x - y;
console.log("A subtração de " + x + " e " + y + " é " + resultado); //8

resultado = x * y;
console.log("A multiplicação de " + x + " e " + y + " é " + resultado); //20

resultado = x / y;
console.log("A divisão de " + x + " e " + y + " é " + resultado); //5

//usar `` fica mais legivel que usar o exemplo acima
let resultado2= x + y;
console.log(`A soma de ${x} e ${y} é ${resultado2}`); //12

resultado2 = x - y;
console.log(`A subtração de ${x} e ${y} é ${resultado2}`); //8

resultado2 = x * y;
console.log(`A multiplicação de ${x} e ${y} é ${resultado2}`); //20

resultado2 = x / y;
console.log(`A divisão de ${x} e ${y} é ${resultado2}`); //5