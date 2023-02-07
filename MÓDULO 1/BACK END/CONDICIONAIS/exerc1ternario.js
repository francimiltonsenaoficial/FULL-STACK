const valor_da_compra = 10000;
const numero_de_parcelas = 8;
const desconto = 100;


if (numero_de_parcelas === 1) {
    let valor_a_pagar_em_reais = (valor_da_compra - valor_da_compra * 0.1) / 100;
    console.log(`Como o pagamento é a vista, você tem um desconto de 10% e deve 
    pagar apenas ${valor_a_pagar_em_reais} reais.`);
} else {
    let valor_a_pagar_em_reais = (valor_da_compra / numero_de_parcelas / 100).toFixed(2);
    console.log(`Como o pagamento é a prazo, você pagará em ${numero_de_parcelas}x de ${valor_a_pagar_em_reais} reais, totalizando
    ${valor_da_compra/100} reais.`);
}

const valorDaCompra = 10000;
const numeroDeParcelas = 12;
const descont = 100;

if (numeroDeParcelas === 1) {
    let valorEmReais = valorDaCompra - valorDaCompra * 0.1 / 100;
    console.log(`Como o pagamento é vista, você tem um desconto de 10% e deve pagar apenas ${valorEmReais} reais.`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <7) {
    let valorEmReais = (valorDaCompra / numeroDeParcelas / 100).toFixed(2);
    console.log(`Como o pagamento é a prazo, você pagará em ${numeroDeParcelas}x de ${valorEmReais} reais sem juros, totalizando
    ${valorDaCompra / 100} reais.`);
} else if (numeroDeParcelas <= 12) {
    const valorComJuros = (valorDaCompra * Math.pow(1+0.01), numeroDeParcelas);
    let valorEmReais = (valorComJuros / numeroDeParcelas / 100).toFixed(2);
    console.log(`Como o pagamento é a prazo, você pagará em ${numeroDeParcelas}x de 
    ${valorEmReais} reais com juros, totalizando ${(valorComJuros / 100).toFixed(2)} reais.`);
} else {
    console.log(`Não é posssivel dividir nessa quantidade de parcelas`);
}

