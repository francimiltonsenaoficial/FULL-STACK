// é um método de comparação que ordena alfabéticamente levando em consideração o idioma e seus caracteres especiais.

//EXERCÍCIO:

//Dado um array com nomes de pessoas, ordene-os em ordem alfábetica.

const nomes = ["pedro", "Amanda", "junior", "ana", "João", "Álvaro"];

nomes.sort((a, b) => a.localeCompare(b));

console.log(nomes);
