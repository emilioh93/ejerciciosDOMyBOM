// Función para desplegar input al presionar "Comenzar juego"
function comenzarJuego() {
    let seccion = document.getElementsByTagName("section");
    if (botonComenzar.innerHTML === "Comenzar juego") {
        seccion[0].innerHTML += `<div class="d-flex justify-content-center mt-5">
        <form>
            <div class="mb-3">
                <label class="form-label">Ingrese un número</label>
                <input for="numeroUsuario" type="number" class="form-control numeroUsuario" id="numeroUsuario">
                <div id="numberHelp" class="form-text">El número que ingrese debe estar comprendido en el rango de 1 a 100.</div>
            </div>
            <button type="button" class="btn btn-dark mb-3" onclick="adivinar()">Enviar</button>
            <div class="alert alert-danger d-none" role="alert" id="msjAlerta">
                Prueba de alerta
            </div>
        </form>
        </div>`
        botonComenzar.innerHTML = "Volver";
    } else if (seccion[0].hasChildNodes() && seccion[0].children.length > 4) {
        seccion[0].removeChild(seccion[0].children[4]);
        botonComenzar.innerHTML = "Comenzar juego";
    }
}

// Genero número aleatorio
let numAleatorio = Math.floor(Math.random() * 100) + 1;

// Función para adivinar el número
function adivinar() {
    console.log("Desde la función adivinar");
    let numUsuario = Number(numeroUsuario.value);
    console.log("Número ingresado = " + numUsuario);
    console.log("Número aleatorio = " + numAleatorio);
    let alerta = document.getElementById("msjAlerta");

    if (numUsuario === numAleatorio) {
        console.log("Adivinaste");
        alerta.className = "alert alert-success text-center";
        alerta.innerHTML = "¡Adivinaste!";
    } else if (numUsuario > numAleatorio) {
        console.log("Te pasaste");
        alerta.className = "alert alert-danger text-center";
        alerta.innerHTML = "¡Incorrecto! Te pasaste";
    } else if (numUsuario < numAleatorio) {
        alerta.className = "alert alert-danger text-center";
        alerta.innerHTML = "¡Incorrecto! Te quedaste corto";
        console.log("Te quedaste corto");
    }
}