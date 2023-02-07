const idade = 29;

//qual codigo executar só quando a pessoa for maior de idade?
//usar if pois é uma condicional e nao uma variavel
//existe uam sintex ou regra certa pra funcionar
// if= se em ingles

//assim que fechar parenteses() abrir chaves {}
//toda vez que abrir chaves estou criando um bloco de codigos ou seja uma reuniao reservada ou seja o codigo so executa se for verdade caso contrario a execucao pula as chaves


if (idade >=18) {console.log("É maior de idade");}
else {
    console.log("É menor de idade")
}

//apos fechar chaves posso colocar um else (se nao em ingles) e abro chaves denovo e coloco o codigo pra executar caso seja falso.
console.log("fim de código");

const years_old = 22;

//menor de 18 -> menor de yaer_sold
//menor ou igual a 65 -> adulto
// acima de 65 -> idoso
 
if (years_old < 18) {
    console.log("Menor de idade")
} else if (years_old <= 65) {
    console.log("Adulto")
} else {
    console.log("Idoso");
}


