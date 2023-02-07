const países = ["China", "índia", "Brasil", "Paquistão", "Nigéria"];


países.push("Indonésia");
console.log(países);

países.pop();
console.log(países);

países.unshift("Indonésia");
console.log(países);

países.shift();
console.log(países);

//para imprirmir sempre o ultimo da lista sem alterar o codigo ex abaixo

const ultimoPaís = países[países.length - 1];
console.log(ultimoPaís);

//imprimir segundo da lista ex abaixo

console.log(países[1]);
console.log(países[2]);
