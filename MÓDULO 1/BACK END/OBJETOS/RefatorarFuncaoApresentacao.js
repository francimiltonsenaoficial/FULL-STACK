function apresentar(pessoa) {
    if (pessoa.idade < 25) {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
        } else if (pessoa.idade < 60) {
            console.log(`Olá! Meu nome é ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
        } else {
            console.log(`Olá! Meu nome é ${pessoa.nome}, sou um idoso de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
        }
}

let francimilton = {
    nome: "Francimilton",
    idade: 22,
    profissao: "Engenheiro de Software",
    altura: 1.80
}; 

apresentar(francimilton);

let daniele = {
    nome: "Daniele",
    idade: 24,
    profissao: "Empresária",
    altura: 1.70
}; 

apresentar(daniele);

    let francis = {
        nome: "Francis",
        idade: 75,
        profissao: "Aposentado",
        altura: 1.65
    }; 

apresentar(francis);