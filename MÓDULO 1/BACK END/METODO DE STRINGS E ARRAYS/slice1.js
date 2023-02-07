const localizacao = "rio de janeiro-rj";

const endIndex = localizacao.indexOf("-");
const cidade = localizacao.slice(0, endIndex); //do 0 te indice 8

console.log(cidade);