//faça um programa que diz quantos "a" minusculos tem;

const palavra = "amarelinho";

let quantidade = 0;

for (let letra of palavra) {
    if (letra === "a") {
        quantidade++; //somar +1 
    }
}
if (quantidade === 0) {
    console.log('Não há nenhuma letra "a" nessa palavra');
} else if (quantidade === 1) {
    console.log('Tem 1 letra "a" nessa palavra');
} else {
console.log(`Tem ${quantidade} letras "a" nessa palavra`);
}

