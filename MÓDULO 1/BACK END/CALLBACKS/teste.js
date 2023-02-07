let cronometro = 60;
function BombaRelogio() {
    
   if(cronometro ===0) { 
    console.log("Kabuuuuum!");
    clearInterval(intervalId);
    }else{
        console.log(`A bomba explodirá em ${cronometro} segundo${cronometro ===1 ?
        "" : "s"}`);
        cronometro--;
    }
}

BombaRelogio();
const  intervalId = setInterval(BombaRe