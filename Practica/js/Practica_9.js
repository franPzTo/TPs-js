let texto= prompt("Escribe una frase:")
let letrasPermitidas="AEIOUÁÉÍÓÚÄËÏÖÜaeiouáéíóúäëïöü ";
let letrasPermitidas2="QWTYPSDFHJKLÑZXCVBNMqwrtypsdfghjklñzxcvbnm ";
let letrasPermitidas3="1234567890.,;:!¿?¡'\"-()[]{}<>@#$%&*+=_\\/|`~^° ";
let resultado= "";
let resultado2= "";
let resultado3= "";

for (let i=0; i < texto.length; i++){
    if
        (letrasPermitidas.includes(texto[i])){
    resultado +=texto[i];
    }
}
for (let i=0; i < texto.length; i++){
    if
        (letrasPermitidas2.includes(texto[i])){
    resultado +=texto[i];
    }
}
for (let i=0; i < texto.length; i++){
    if
        (letrasPermitidas3.includes(texto[i])){
    resultado3+=texto[i];
    }
}

document.write(resultado);
document.write(resultado2);
document.write(resultado3);