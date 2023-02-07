//Dado umm array de pessoas, que são objetos no seguinte formato

//{

  //  nome: "Diego"
   // idade: 57
//}

//ordene este array em ordem crescente de idade das pessoas. Para pessoas da mesma idade, ordene-as em ordem alfabética.

const pessoas = [
    {
        nome: "Jr",
        idade: 30
    },
    {
        nome: "adriana",
        idade: 18
    },
    {
        nome: "André",
        idade: 30
    },
    {
        nome: "Carvalho",
        idade: 16
    },
    {
        nome: "Cláudio",
        idade: 30
    }
];

// - A 
// + B

pessoas.sort((a, b) => {
    if (a.idade < b.idade) {
         return -1;
    } else if (b.idade > a.idade) {
       return 1;
    } else {
        a.nome.localeCompare(b.nome)
    }
});

console.log(pessoas);









