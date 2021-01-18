function generarNumAleatorio() {
    let numAleatorio = Math.floor(Math.random() * 99);
    console.log("🚀 Desde función: generarNumAleatorio. Número aleatorio = ", numAleatorio);
    let boton = document.getElementById("botonComenzar");
    console.log("🚀 Desde variable botón = ", boton);
}

function comenzarJuego() {
    generarNumAleatorio();
    let seccion = document.getElementsByTagName("section");
    if (botonComenzar.innerHTML === "Comenzar juego") {
        seccion[0].innerHTML += `<div class="d-flex justify-content-center mt-5">
        <form>
            <div class="mb-3">
                <label class="form-label">Ingrese un número</label>
                <input type="number" class="form-control" id="numeroUsuario">
                <div id="numberHelp" class="form-text">El número que ingrese debe estar comprendido en el rango de 0 a 99.</div>
            </div>
            <button type="button" class="btn btn-dark" onclick="adivinar()">Enviar</button>
        </form>
    </div>
    <div class="alert alert-primary d-none" role="alert" id="alert">
            A simple primary alert—check it out!
        </div>`
        botonComenzar.innerHTML = "Volver";
    } else if (seccion[0].hasChildNodes() && seccion[0].children.length > 5) {
        seccion[0].removeChild(seccion[0].children[5]);
        botonComenzar.innerHTML = "Comenzar juego";
    }
}

function adivinar() {
    console.log("desde la función adivinar");
    let numUsuario = document.getElementById("numeroUsuario").value;
    let alerta = document.getElementById("alert");

    while (numUsuario != this.numAleatorio) {
        if (numUsuario < this.numAleatorio) {
            alerta.innerHTML = "Te quedaste corto! El número es mayor";
        } else if (numUsuario > this.numAleatorio) {
            alerta.innerHTML = "Te pasaste! El número es menor";
        } else {
            alerta.innerHTML = "Ingresaste un valor incorrecto! Intenta nuevamente.";
        }
    }
    alerta.innerHTML = "¡Correcto! El número es " + this.numAleatorio;
}