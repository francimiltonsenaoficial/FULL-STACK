//método nada mais é do que uma função que pertence aquele determuinado objeto.

function obterFaixaEtaria(idade) {
    if (idade < 25) {
        return "Jovem";
    } else if (idade < 65) {
        return "Adulto"
    } else {
        return "Idoso"
    }
}


let francimilton = {
    nome: "Francimilton",
    idade: 22,
    profissao: "Engenheiro de Software",
    altura: 1.80,
    apresentar: function () {
        const faixaEtaria = obterFaixaEtaria(this.idade);
            console.log(`Olá! Meu nome é ${this.nome}, sou um ${faixaEtaria} de ${this.idade} anos, ${this.altura}m de altura e sou ${this.profissao}`);
    },
    obterFaixaEtaria: function () {
        if (this.idade < 25) {
            return "Jovem";
        } else if (this.idade < 65) {
            return "Adulto";
        } else {
            return"Idoso"
        }
        } 
};


francimilton.apresentar();
console.log(francimilton.obterFaixaEtaria());