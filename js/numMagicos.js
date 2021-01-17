// generar numero aleatorio

function generarNumAleatorio() {
    let numAleatorio = Math.floor(Math.random() * 99);
    console.log("🚀 ~ file: numMagicos.js ~ line 5 ~ generarNumAleatorio ~ numAleatorio", numAleatorio);
    let boton = document.getElementById("botonComenzar");
    console.log("🚀 ~ file: numMagicos.js ~ line 7 ~ generarNumAleatorio ~ boton", boton);
}

// al hacer click deberá:
// 1- Generar el número aleatorio
// 2- Largar input preguntando al usuario por el número

generarNumAleatorio();
let numUsuario = parseInt(prompt("¿Cuál es el número? (entre 0 y 99)"));

// al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico. Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

while (numUsuario != numAleatorio) {
    if (numUsuario < numAleatorio) {
        alert("Te quedaste corto! El número es mayor");
    } else if (numUsuario > numAleatorio) {
        alert("Te pasaste! El número es menor");
    } else {
        alert("Ingresaste un valor incorrecto! Intenta nuevamente.");
    }
}
alert("¡Correcto! El número es " + numAleatorio);