
//Manipular objetos
//

const pessoa = {
    nome: "José",
    idade: 30,
    altura: 1.73,
    temCNH: true,
    apelidos: ["Jr", "Juninho", "J."]
};

//posso manipular as propriedades das variaveis 
//mas não posso atribuir nada na variavel const ja existente

pessoa.nome = "João";
pessoa.apelidos[0] = "Joãozinho";
console.log(pessoa);