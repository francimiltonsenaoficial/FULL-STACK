function obterFaixaEtaria(idade) {
    if (idade < 25) {
        return "Jovem";
    } else if (idade < 65) {
        return "Adulto"
    } else {
        return "Idoso"
    }
}

function apresentar(pessoa) {

    const faixaEtaria = obterFaixaEtaria(pessoa.idade);
            console.log(`Olá! Meu nome é ${pessoa.nome}, sou um ${faixaEtaria} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
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
    idade: 55,
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