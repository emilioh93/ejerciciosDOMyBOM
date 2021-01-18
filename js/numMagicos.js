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

function comenzarJuego() {
    generarNumAleatorio();
    let seccion = document.getElementsByTagName("section");
    if (botonComenzar.innerHTML === "Comenzar juego") {
        seccion[0].innerHTML += `<div class="d-flex justify-content-center mt-5">
        <form>
            <div class="mb-3">
                <label class="form-label">Ingrese un número</label>
                <input type="number" class="form-control" id="InputNumber">
                <div id="numberHelp" class="form-text">El número que ingrese debe estar comprendido en el rango de 0 a 99.</div>
            </div>
            <button type="submit" class="btn btn-dark">Enviar</button>
        </form>
    </div>`
        botonComenzar.innerHTML = "Volver";
    } else if (seccion[0].hasChildNodes() && seccion[0].children.length > 5) {
        seccion[0].removeChild(seccion[0].children[5]);
        botonComenzar.innerHTML = "Comenzar juego";
    }
}

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