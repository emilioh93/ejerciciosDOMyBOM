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

    mostrarGeneracion() {
        // este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
        if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            document.write(`${this.nombre} pertenece a la generación Z. El rasgo característico de esta generación es la Irreverencia<br>`);
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            document.write(`${this.nombre} pertenece a la generación Y (millennials). El rasgo característico de esta generación es la Frustración<br>`);
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            document.write(`${this.nombre} pertenece a la generación X. El rasgo característico de esta generación es la Obsesión por el éxito<br>`);
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            document.write(`${this.nombre} pertenece a la generación Baby Boom. El rasgo característico de esta generación es la Ambición<br>`);
        } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            document.write(`${this.nombre} pertenece a la generación Silent Generation (niños de la posguerra). El rasgo característico de esta generación es la Austeridad<br>`);
        } else {
            document.write("Dato incorrecto<br>");
        }
    }

    // esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
    esMayorDeEdad() {
        if (this.edad >= 18) {
            document.write(this.nombre + " es mayor de edad<br>");
        } else {
            document.write(this.nombre + " es menor de edad<br>");
        }
    }

    // mostrarDatos: devuelve toda la información del objeto.
    mostrarDatos() {
        document.write(`Nombre: ${nombre} -- Edad: ${edad} -- DNI: ${dni} -- ${sexo} -- Peso: ${peso}kg -- Altura: ${altura}cm -- Año de Nacimiento: ${anioNacimiento}<br>`);
    }

    // generaDNI(): genera un número aleatorio de 8 cifras.
    generaDNI() {
        let nuevoDNI = Math.floor(Math.random() * 99999999);
        this.dni = nuevoDNI;
    }
}

// Debo crear una función que reciba los datos del formulario al hacer click en "Enviar"
function crearObjeto(nombre, edad, dni, peso, altura, anioNacimiento) {
    console.log("Desde función crearObjeto");
    let botonEnviar = document.getElementById("botonEnviar");
    console.log("🚀 ~ file: generaciones.js ~ line 54 ~ crearObjeto ~ botonEnviar", botonEnviar)

    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    // this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;

    nombre = document.getElementById("inputNombre").value;
    console.log("🚀 ~ file: generaciones.js ~ line 61 ~ crearObjeto ~ nombre", nombre)
    edad = document.getElementById("inputEdad").value;
    console.log("🚀 ~ file: generaciones.js ~ line 63 ~ crearObjeto ~ edad", edad)
    dni = document.getElementById("inputDNI").value;
    console.log("🚀 ~ file: generaciones.js ~ line 65 ~ crearObjeto ~ dni", dni)
        // sexo = document.getElementById("inputSexo");
    peso = document.getElementById("inputPeso").value;
    console.log("🚀 ~ file: generaciones.js ~ line 68 ~ crearObjeto ~ peso", peso)
    altura = document.getElementById("inputAltura").value;
    console.log("🚀 ~ file: generaciones.js ~ line 70 ~ crearObjeto ~ altura", altura)
    anioNacimiento = document.getElementById("inputAnio").value;
    console.log("🚀 ~ file: generaciones.js ~ line 72 ~ crearObjeto ~ anioNacimiento", anioNacimiento)

    // var radioButtons = document.getElementsByName("flexRadioDefault");
    // var radio;

    // for (var i = 0, i < radioButtons.length; i++) {
    //     //Así cogemos el valor del radio que esté checked
    //     if (radioButtons[i].checked) {
    //         radio = radioButtons[i].value;
    //         break;
    //     }
    // }
}

function mostrarDatos(nombre, edad, dni, peso, altura, anioNacimiento) {
    console.log("Desde función mostrarDatos");

    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    // this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;

    nombre = document.getElementById("inputNombre").value;
    edad = document.getElementById("inputEdad").value;
    dni = document.getElementById("inputDNI").value;
    peso = document.getElementById("inputPeso").value;
    altura = document.getElementById("inputAltura").value;
    anioNacimiento = document.getElementById("inputAnio").value;

    console.log(`Nombre: ${nombre} -- Edad: ${edad} -- DNI: ${dni} -- Peso: ${peso}kg -- Altura: ${altura}cm -- Año de Nacimiento: ${anioNacimiento}`);
    document.write(`Nombre: ${nombre} -- Edad: ${edad} -- DNI: ${dni} -- Peso: ${peso}kg -- Altura: ${altura}cm -- Año de Nacimiento: ${anioNacimiento}`);
}