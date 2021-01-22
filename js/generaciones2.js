class Persona {
    constructor(nombre, edad, dni, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }
}

// A continuación una clase de interfaz de usuario, para conectarse con el html
class UI {
    agregarPersona(persona) {
        let listaPersonas = document.getElementById("alertaPersona");
        let card = document.createElement("div")
        card.innerHTML = `
        <div class="card text-center my-4">
            <div class="card-body">
                <strong>Nombre: </strong> ${persona.nombre}
                <strong>Edad: </strong> ${persona.edad}
                <strong>DNI: </strong> ${persona.dni}
                <strong>Peso: </strong> ${persona.peso}
                <strong>Altura: </strong> ${persona.altura}
                <strong>Año de nacimiento: </strong> ${persona.anioNacimiento}
            </div>
        </div>
        `;
        listaPersonas.appendChild(card);
    }

    mostrarGeneracion() {

    }

    mayorOMenor() {

    }
}

// Eventos del DOM
document.getElementById("formulario").addEventListener("submit", function(e) {
    alert("Envié formualrio")
    let nombre = document.getElementById("inputNombre").value;
    let edad = document.getElementById("inputEdad").value;
    let dni = document.getElementById("inputDNI").value;
    let peso = document.getElementById("inputPeso").value;
    let altura = document.getElementById("inputAltura").value;
    let anioNacimiento = document.getElementById("inputAnio").value;
    console.log(nombre, edad, dni, peso, altura, anioNacimiento);

    let persona = new Persona(nombre, edad, dni, peso, altura, anioNacimiento);
    console.log("🚀 ~ file: generaciones2.js ~ line 40 ~ document.getElementById ~ persona", persona)

    let ui = new UI();
    ui.agregarPersona(persona);

    // Con e.preventDefault() no permito que la página se recargue cuando presiono el botón Enviar
    e.preventDefault();
});

// TODO: analizar ejercicio de Product App para tomar como referencia y resolver ejercicio de generaciones
// TODO: configurar sexo
// FIXME: arreglar forma de crear objetos. La que escribí no me parece correcta porque no crea objetos, sino que sólo toma los datos