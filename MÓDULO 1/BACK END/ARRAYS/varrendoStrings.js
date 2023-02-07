const word = "Alemanha";

let encontrado = false;

for (let words of word) {
    if (words === "h")  {
        encontrado = true;
    console.log("Tem a letra h")
    break;
} 

}
if (!encontrado) {
    console.log("Não tem a letra h")
}