//padStart(lenght,text)

//Preenche uma string colocando text no início dela(várias vezes se necessário) até que a string atinja o tamanho lenght

//EX:

const ultimos4dig = "2345";

const numCartao = ultimos4dig.padStart(19, "**** ");
console.log(numCartao);

//**** **** **** 2345
