window.onload = iniciar;

function iniciar() {
    document.getElementById("comenzarTempo").addEventListener("click", comenzarTempo);
    document.getElementById("parar").addEventListener("click", parar);
    document.getElementById("reiniciar").addEventListener("click", reiniciar);
}

function comenzarTempo() {
    minutos = document.getElementById("minutos").value;
    segundos = document.getElementById("segundos").value;
    document.getElementById("temporizador").innerHTML = "00:00";
    escribir();
    intervalo = setInterval(escribir, 1000);
    document.getElementById("comenzarTempo").removeEventListener("click", comenzarTempo);
}

function escribir() {
    let mAux,
        sAux;
    segundos--;
    if (segundos == 0) {
        minutos--;
        segundos = 59
    }

    if (segundos < 10) { sAux = "0" + segundos; } else { sAux = segundos; }
    if (minutos < 10) { mAux = "0" + minutos; } else { mAux = minutos; }

    document.getElementById("temporizador").innerHTML = mAux + ":" + sAux;

    if (minutos == -1) {
        parar();
        document.getElementById("temporizador").innerHTML = "00:00";
    }
}

function parar() {
    clearInterval(intervalo);
    // FIXME: El problema está acá, porque no sigue desde el número en que quedó, sino que comienza de nuevo
    document.getElementById("comenzarTempo").addEventListener("click", comenzarTempo);
}

function reiniciar() {
    clearInterval(intervalo);
    document.getElementById("temporizador").innerHTML = "00:00";
    horas = 0;
    minutos = 0;
    segundos = 0;
    document.getElementById("comenzarTempo").addEventListener("click", comenzarTempo);
}