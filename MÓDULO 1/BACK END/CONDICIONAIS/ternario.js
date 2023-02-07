//exemplo onde o codigo diferencia se é plural ou singular

const saldo = 1;
if (saldo === 1) {
    console.log(`Ele tem ${saldo} real`);
} else {
    console.log(`Ele tem ${saldo} reais`);
}

//ternario que o papel dele é tornar esse codigo mais simples
//muito usado pro singular e plural
//posso colocar esse codigo em uma linha so usando esse ternario
const xsaldo = 10;
const unidade = xsaldo === 1 ? "real" : "reais";

console.log(`Ele tem ${xsaldo} ${unidade}`);