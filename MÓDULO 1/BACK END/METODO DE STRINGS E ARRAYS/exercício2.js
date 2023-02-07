//const original =  "1,350,000";

//const resultado =  original.replace(",", ".").replace(",", "."); //jeito para poucas virgulas ou pontos

//console.log(resultado);

const variante = "1,350,000,000,000,000";

let resultado2 = variante;
let resultadoAnterior = "";

while (resultado2 !== resultadoAnterior) {
    resultadoAnterior = resultado2;
resultado2 = resultado2.replace(",", ".")  //colocar em um loop.
}

console.log(resultado2);