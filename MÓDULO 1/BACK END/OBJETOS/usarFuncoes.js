const pessoa = {
    nome: "Francimilton",
    idade: 75,
    profissao: "Engenheiro de Software",
    altura: 1.80
}; if (pessoa.idade < 25) {
console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
} else if (pessoa.idade < 60) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
} else {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um idoso de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
};
