//Declare uma variavel que armazene um objeto
//contendo as seguintes propriedades: nome, idade, altura,
//temCNH, e apelidos.

//Depois faça um programa que imprime na tela p belo texto abaixo, 
//sibstituindo os dados pessoais pelos dados do objeto

//"José tem 30 anos, 1.73m de altura, possui CNH e os seguintes apelidos
// -Jr
// - Juninho"

const pessoa = {
    nome: "José",
    idade: 30,
    altura: 1.73,
    temCNH: true,
    apelidos: ["Jr", "Juninho", "J."]

};
let textoCNH = "";
if (pessoa.temCNH) {
    textoCNH = "possui";
} else {
    textoCNH = "não possui";
}
console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} CNH, possue os seguintes apelidos:`);
for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`);
}

//jeito certo de acessar os apelidos de uma array acima