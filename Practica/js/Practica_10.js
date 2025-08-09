let x= prompt("Escribe un numero");
x= parseInt(x);

if(x % 7 === 0){
    document.write("El "+x+" es divisible por 7");
}else if(x%5 === 0){
    document.write("El "+x+" es divisible por 5");
}else if(x%3 === 0){
    document.write("El "+x+" es divisible por 3");
}else if(x%2 === 0){
    document.write("El "+x+" es divisible por 2");
} else{
    document.write("El "+x+" NO es divisible por 2 o 3 o 5 o 7");
}

