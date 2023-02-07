//'OU' lógico

const tem_ingresso = true;
const censura = 18;
const idade = 14;
const estra_com_os_pais = true;

//tem que ter ingresso e tem que ter idade maior ou igual a censura 'OU' estar com os pais
// 'Ou' na programação é representado com 
// no && todas as respostas tem que ser verdade e no || uma das duas te,m que ser verdade
if (tem_ingresso) {
    if (idade >= censura || estra_com_os_pais) {
        console.log('Pode entrar')
    } else {
        console.log('barrado pela idade')
    }
} else { 
    console.log('barrado por falta de ingresso');
}


