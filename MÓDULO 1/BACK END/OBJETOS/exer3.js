const comanda = {
    nome: "Pedro",
    idade: 19,
    produtos: [
        {
            nome: "Batata Frita",
            preçoUni: 1500,
            quantidade: 2
        },
        { 
            nome: "Queijo Coalho",
            preçoUni: 1800,
            quantidade: 1
        }
    ]
};
console.log(comanda.nome);
console.log(comanda.idade);
comanda.idade = 20;
console.log(comanda.idade);
console.log(comanda.produtos[0].nome);
console.log(comanda.produtos[comanda.produtos.length - 1].preçoUni);