function verificarMaioridade(nome, idade) {
    if (idade >= 18) {
    return true; 
    } else {
    return false;
    }
}

let nome = "Francimilton"
let idade = 22;

let éhMaiorDeIdade = verificarMaioridade(nome, idade)

console.log(éhMaiorDeIdade);