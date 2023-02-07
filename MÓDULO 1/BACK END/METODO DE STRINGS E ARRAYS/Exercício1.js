//Em alguns países é comum que se use . ao invés de vírgula para separar as casas decimais.

//Faça um programa que altere uma string desse formato que estamos acostumados no Brasil, com vírgula.

//Por exemplo, o número 97.50 deve ser transformado para 97,50.

const numero1 = "97.50";

const parte = numero1.replace(".", ",");
//97,50

console.log(parte);