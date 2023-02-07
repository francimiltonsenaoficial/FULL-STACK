let contagem = 20;

function imprimirContagem() {

    if (contagem === 0) {
      console.log("KABUUUUUUM!"); 
      clearInterval(intervalId);
    }else {
        console.log(`A bomba explodirá em ${contagem} segundo${contagem ===1 ? 
            "" : "s"}`);
            contagem--;
    }
}

imprimirContagem();

const intervalId = setInterval(imprimirContagem, 1000);
