//Você recebeu uma lista de preços do seu front-end e quer validar se ela está toda em centavos e, claro, que os números são positivos. 

///Faça um programa que verifica se todos os elementos da lista são números inteiros e positivos.


const precos = [100, 131, -2542];

    //const resto = 1.25 % 1;
        ///console.log(resto);
//const ehInteiro = resto === 0;

const ehValido = precos.every(x => {
    const ehPositivo = x >= 0;
    const ehInteiro = x % 1 === 0;

    if (ehPositivo && ehInteiro) {
        return true;
    } else {
        return false;
    }
});

console.log(ehValido);