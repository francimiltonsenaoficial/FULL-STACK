//Faça um programa que percorra uma lista de objetos no formato da esquerda e transforme-a para que fique no formato da direita.

const pessoas = [
    {
        nome: "José",
        idade: 30,
        altura: 173
    },
    {
        nome: "Pedro",
        idade: 28,
        altura: 144
    },
    {
        nome: "Maria",
        idade: 38,
        altura: 156
    },
];

const pessoasTransformadas = pessoas.map(x => {
    return {
        nome: x.nome,
        idade: `${x.idade} anos`,
        altura: `${x.altura/100}m`,
        maioridade: (x.idade >= 18 ? "É maior de idade" : "É menor de idade")
    }
});

console.log(pessoasTransformadas);