class Persona {
    constructor(nombre, edad, dni, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }

    get getEdad() {
        return edad;
    }
}

// A continuación una clase de interfaz de usuario, para conectarse con el html
class UI {
    agregarPersona(persona) {
        let listPersonas = document.getElementById("listaPersonas");
        let list = document.createElement("ul")
        list.innerHTML = `
            <ul class="list-group my-4 shadow p-1 mb-2 bg-white rounded">
                <li class="list-group-item"><strong>Nombre: </strong> ${persona.nombre}</li>
                <li class="list-group-item"><strong>Edad: </strong> ${persona.edad}</li>
                <li class="list-group-item"><strong>DNI: </strong> ${persona.dni}</li>
                <li class="list-group-item"><strong>Peso: </strong> ${persona.peso}</li>
                <li class="list-group-item"><strong>Altura: </strong> ${persona.altura}</li>
                <li class="list-group-item"><strong>Año de nacimiento: </strong> ${persona.anioNacimiento}</li>
            </ul>
        `;
        listPersonas.appendChild(list);
        this.resetearForm();
    }

    resetearForm() {
        document.getElementById("formulario").reset();
    }

    // mostrarGeneracion() {
    //     console.log("Desde mostrarGeneracion")
    //     if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
    //         console.log("Desde condicional: 1994-2010")
    //         document.write(`${this.nombre} pertenece a la generación Z. El rasgo característico de esta generación es la Irreverencia<br>`);
    //     } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
    //         console.log("Desde condicional: 1981-1993")
    //         document.write(`${this.nombre} pertenece a la generación Y (millennials). El rasgo característico de esta generación es la Frustración<br>`);
    //     } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
    //         console.log("Desde condicional: 1969-1980")
    //         document.write(`${this.nombre} pertenece a la generación X. El rasgo característico de esta generación es la Obsesión por el éxito<br>`);
    //     } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
    //         console.log("Desde condicional: 1949-1968")
    //         document.write(`${this.nombre} pertenece a la generación Baby Boom. El rasgo característico de esta generación es la Ambición<br>`);
    //     } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
    //         console.log("Desde condicional: 1930-1948")
    //         document.write(`${this.nombre} pertenece a la generación Silent Generation (niños de la posguerra). El rasgo característico de esta generación es la Austeridad<br>`);
    //     } else {
    //         document.write("Dato incorrecto<br>");
    //     }
    // }

    mayorOMenor() {
        document.getElementById("mayorMenor");
        console.log("Desde mayorOMenor");
        if (this.edad >= 18) {
            document.write(this.nombre + " es mayor de edad<br>");
        } else {
            document.write(this.nombre + " es menor de edad<br>");
        }
    }
}

// Eventos del DOM
document.getElementById("formulario").addEventListener("submit", function(e) {
    let nombre = document.getElementById("inputNombre").value;
    let edad = document.getElementById("inputEdad").value;
    let dni = document.getElementById("inputDNI").value;
    let peso = document.getElementById("inputPeso").value;
    let altura = document.getElementById("inputAltura").value;
    let anioNacimiento = document.getElementById("inputAnio").value;

    let persona = new Persona(nombre, edad, dni, peso, altura, anioNacimiento);
    console.log("🚀 ~ file: generaciones2.js ~ line 40 ~ document.getElementById ~ persona", persona)

    let ui = new UI();
    ui.agregarPersona(persona);

    // Con e.preventDefault() no permito que la página se recargue cuando presiono el botón Enviar
    e.preventDefault();
});

// Evento mayor Menor
document.getElementById("mayorMenor").addEventListener("submit", function() {
    console.log("Desde btn mayorMenor")
    let edad = document.getElementById("inputEdad").value;
    let persona = new Persona(edad)
    console.log("🚀 ~ file: generaciones2.js ~ line 91 ~ document.getElementById ~ persona", persona)
})

function fMayorMenor() {
    console.log("Desde fMayorMenor");
    // let edad = document.getElementById("inputEdad").value;
    // let nombre = document.getElementById("inputNombre").value;
    console.log(this.edad)
    if (this.edad >= 18) {
        console.log(this.nombre + " es mayor de edad");
    } else {
        console.log(this.nombre + " es menor de edad");
    }
}

// TODO: analizar ejercicio de Product App para tomar como referencia y resolver ejercicio de generaciones. Quedé en el minuto 42 del video
// TODO: configurar sexo
// FIXME: arreglar forma de crear objetos. La que escribí no me parece correcta porque no crea objetos, sino que sólo toma los datos