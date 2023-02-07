//OPERADORES LÓGCOS

const tem_ingresso = false;
const censura = 16
const idade = 19

//esse codigo so ira execultar true se tudo for verdadeiro caso um seja true e outro false a resposta é false

//tem que ter ingresso e tem que ter idade

// o "e" é representado por &&

if (tem_ingresso && idade >= censura) {
    console.log('Pode entrar');}
    else {
        console.log('barrado');
}