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
let total_a_pagar = 0;
for(let item of comanda.produtos) {
    total_a_pagar = total_a_pagar + (item.quantidade * item.preçoUni);
   //outra forma de fazer a mesma coisa:
   //total_a_pagar += item.quantidade * item.preçoUni; 
}

console.log(`${comanda.nome}, valor total a pagar é de ${total_a_pagar/100}`);
