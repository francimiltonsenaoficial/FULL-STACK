//Faça uma função chamada imprimir data que  tem 3 parâmetros: dia, mês e ano.

//Essa função deve imprimir na tela a data passada como argumento no seguinte formato, de modo que ela sempre tenha 8 digitos no total:

//° 01/01/2021
//° 18/02/1991

//Ultilize padStart para garantir que isso aconteça.
//SEMPRE PASSE ARGUMENTOS DO TIPO NUMBER.

function imprimirData(dia, mes, ano) {
    const diaString = `${dia}`.padStart(2, "0");
    const mesString = `${mes}`.padStart(2, "0");
    

    console.log(`${diaString}/${mesString}/${ano}`);
}

imprimirData(1,1,2021);
imprimirData(1,3,2020);
imprimirData(18,2,1991);