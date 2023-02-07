const tem_ingresso = true;
const censura = 18;
const idade = 17;

//pessoa tem que ter ingresso e ter idade maior ou igual a censura

if (tem_ingresso) {
    if (idade >= censura) {
        console.log('Pode entrar')
    } else {
        console.log('barrado pela idade')
    }
} else {
    console.log('barrado porque não tem ingresso');
}
//posso colocar chave uma dentro da outra,

