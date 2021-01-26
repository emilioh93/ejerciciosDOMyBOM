// Al cargarse la página, con la siguiente función asignamos eventos a los botones
window.onload = iniciar;

function iniciar() {
    document.getElementById("cronometrar").addEventListener("click", cronometrar);
    document.getElementById("parar").addEventListener("click", parar);
    document.getElementById("reiniciar").addEventListener("click", reiniciar);

    horas = 0;
    minutos = 0;
    segundos = 0;

    document.getElementById("cronometro").innerHTML = "00:00:00";
}

function cronometrar() {
    // La función escribir añade un segundo
    escribir();
    // 1000 = 1000 milisegundos
    intervalo = setInterval(escribir, 1000);
    // Eliminamos la propiedad del botón evitando que se cree un nuevo evento al hacer click. Así, los segundos no se irán sumando más de una vez a cada segundo.
    document.getElementById("cronometrar").removeEventListener("click", cronometrar);
}

function escribir() {
    // Creamos el dígito auxiliar, para que números de 1 dígito puedan visualizarse con 2. Ej: 05:06:08
    var hAux, mAux, sAux;
    // Incrementamos 1 el valor actual y al llegar a 60, incrementaremos el siguiente valor y reiniciando a 00 el actual
    segundos++;
    if (segundos > 59) {
        minutos++;
        segundos = 0;
    }
    if (minutos > 59) {
        horas++;
        minutos = 0;
    }
    if (horas > 24) { horas = 0; }

    if (segundos < 10) { sAux = "0" + segundos; } else { sAux = segundos; }
    if (minutos < 10) { mAux = "0" + minutos; } else { mAux = minutos; }
    if (horas < 10) { hAux = "0" + horas; } else { hAux = horas; }

    document.getElementById("cronometro").innerHTML = hAux + ":" + mAux + ":" + sAux;
}

function parar() {
    // Eliminamos intervalo
    clearInterval(intervalo);
    // Eliminado el intervalo el botón de iniciar requiere volver a funcionar y por tanto le asignamos de nuevo un evento mediante addEventListener().
    document.getElementById("cronometrar").addEventListener("click", cronometrar);
}

function reiniciar() {
    clearInterval(intervalo);
    document.getElementById("cronometro").innerHTML = "00:00:00";
    horas = 0;
    minutos = 0;
    segundos = 0;
    document.getElementById("cronometrar").addEventListener("click", cronometrar);
}