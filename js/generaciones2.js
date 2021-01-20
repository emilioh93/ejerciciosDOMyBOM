class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }
}

// A continuación una clase de interfaz de usuario, para conectarse con el html
class UI {
    agregarPersona() {

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

    e.preventDefault();
});

// TODO: analizar ejercicio de Product App para tomar como referencia y resolver ejercicio de generaciones
// TODO: configurar sexo
// FIXME: arreglar forma de crear objetos. La que escribí no me parece correcta porque no crea objetos, sino que sólo toma los datos