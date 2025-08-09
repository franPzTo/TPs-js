let r= prompt("Escribe un numero");
r= parseInt(r);

switch(true){
    case (r % 7 === 0):
        switch(true) {
            case (r % 5 === 0):
                switch(true) {
                    case (r % 3 === 0):
                        switch(true) {
                            case (r % 2 === 0):
                                document.write("El " + r + " es divisible por 7, 5, 3 y 2");
                                break;
                            default:
                                document.write("El " + r + " es divisible por 7, 5 y 3, pero NO por 2");
                                break;
                        }
                        break;
                    case (r % 2 === 0):
                        document.write("El " + r + " es divisible por 7, 5 y 2, pero NO por 3");
                        break;
                    default:
                        document.write("El " + r + " es divisible por 7 y 5, pero NO por 3 o 2");
                        break;
                }
                break;
            case (r % 3 === 0):
                switch (true) {
                    case (r % 2 === 0):
                        document.write("El " + r + " es divisible por 7, 3 y 2, pero NO por 5");
                        break;
                    default:
                        document.write("El " + r + " es divisible por 7 y 3, pero NO por 5 o 2");
                        break;
                }
                break;
            case (r % 2 === 0):
                document.write("El " + r + " es divisible por 7 y 2, pero NO por 5 o 3");
                break;
            default:
                document.write("El " + r + " es divisible por 7, pero NO por 5, 3 o 2");
                break;
        }
        break;
    case (r % 5 === 0):
        switch (true) {
            case (r % 3 === 0):
                switch (true) {
                    case (r % 2 === 0):
                        document.write("El " + r + " es divisible por 5, 3 y 2, pero NO por 7");
                        break;
                    default:
                        document.write("El " + r + " es divisible por 5 y 3, pero NO por 7 o 2");
                        break;
                }
                break;
            case (r % 2 === 0):
                document.write("El " + r + " es divisible por 5 y 2, pero NO por 7 o 3");
                break;
            default:
                document.write("El " + r + " es divisible por 5, pero NO por 7, 3 o 2");
                break;
        }
        break;
    case (r % 3 === 0):
        switch (true) {
            case (r % 2 === 0):
                document.write("El " + r + " es divisible por 3 y 2, pero NO por 5 o 7");
                break;
            default:
                document.write("El " + r + " es divisible por 3, pero NO por 5, 2 o 7");
                break;
        }
        break;
    case (r % 2 === 0):
        document.write("El " + r + " es divisible por 2, pero NO por 7, 5 o 3");
        break;
    default:
        document.write("El " + r + " NO es divisible por 7, 5, 3 y 2");
        break;
}