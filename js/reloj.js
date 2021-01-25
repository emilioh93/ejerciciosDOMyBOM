function actualizarHora() {
    // Creo variables con métodos relacionados al tiempo ya existentes
    let fecha = new Date(),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();

    // Llamo a los elementos del html
    let pHoras = document.getElementById("horas"),
        pMinutos = document.getElementById("minutos"),
        pSegundos = document.getElementById("segundos"),
        pDiaSemana = document.getElementById("diaSemana"),
        pNumDia = document.getElementById("numDia"),
        pMes = document.getElementById("mes"),
        pAnio = document.getElementById("anio");

    // Creo array de semana y los voy agregando al html
    let semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    pDiaSemana.innerHTML = semana[fecha.getDay()];

    pNumDia.innerHTML = fecha.getDate();

    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    pMes.innerHTML = meses[fecha.getMonth()];

    pAnio.innerHTML = fecha.getFullYear();

    // Asigno las horas, minutos y segundos. Con el siguiente if, permito que los números inferiores a 2 dígitos, se visualicen con un cero por delante. Ej: 05:06:08
    if (horas < 10) {
        horas = "0" + horas;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    pHoras.innerHTML = horas;
    pMinutos.innerHTML = minutos;
    pSegundos.innerHTML = segundos;
}

window.setInterval(actualizarHora, 1000);