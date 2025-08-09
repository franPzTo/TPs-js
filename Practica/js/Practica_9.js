let texto= prompt("Escribe una frase:")
let letrasPermitidas="AEIOUÁÉÍÓÚÄËÏÖÜaeiouáéíóúäëïöü ";
let resultado= "";

for (let i=0; i < texto.length; i++){
    if
        (letrasPermitidas.includes(texto[i])){
    resultado +=texto[i];
    }
}

document.write(resultado);