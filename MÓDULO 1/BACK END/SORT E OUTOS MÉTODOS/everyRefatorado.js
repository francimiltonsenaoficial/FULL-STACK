const precos = [100, 131, 2542.5];

const ehValido = precos.every(x => x >= 0 && x === Math.floor(x));

console.log(ehValido);