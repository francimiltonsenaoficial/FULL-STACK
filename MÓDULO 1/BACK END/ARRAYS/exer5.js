//Faça um programa que busque pelo nome João numa lista de nomes e imprima na tela o índice 
//em que  se encontra.
//caso não encontre, imprima "não encontrado".

const nomes = ["André", "Ana", "João", "Pedro"];

let encontrado = false;
for (let i = 0; i < nomes.length; i++) {
const item = nomes [i];

if (item === "João") {
    console.log(`João está no índice ${i}`);
    encontrado = true;
    break;
}
}

if (!encontrado) {
    console.log("Não encontrado");
}


