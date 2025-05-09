/*
    Script con el ejemplo para la creación de un objeto, puntos importantes:
    1. Creación de un objeto usando la sintaxis de objeto literal
    2. Acceso a propiedades mediante la notación de punto (persona.primerNombre)
    3. Acceso a propiedades mediante la notación de corchetes (persona["edad"])
    4. Adición de un método al objeto después de su creación
    5. Uso de this para referirse al propio objeto dentro de sus métodos
*/
const persona = {
    primerNombre: "Roberto",
    apellidoPaterno: "Acevedo",
    edad: 50,
    colorOjos: "cafe",
    nacionalidad: "Mexicano"
};

// Se agrega una propiedad al objeto, esta propiedad se crea por medio de un método. 
persona.nombreCompleto = function () {
        return this.primerNombre + " " + this.apellidoPaterno;
    }

// salidas de información para mostar los valores de las propiedades del objeto.
console.log(persona.primerNombre +" tiene "+ persona["edad"] + " años.");
console.log(persona.nombreCompleto() + " tiene ojos color " + persona.colorOjos);
console.log(persona.apellidoPaterno +" es "+ persona.nacionalidad);
