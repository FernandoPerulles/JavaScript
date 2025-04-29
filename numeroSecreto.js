/*
  Script para validar un numero capturado por el usuario. V.1.0
*/
const numeroSecretoSistema = Math.floor(Math.random() * 10 ) + 1; // Declaramos una constante con el numero secreto.
let numeroUsuario = Number(prompt("Adivina el número entre 1 y 10.")); // Declaramos variable para que el valor cambie por el input del usuario.
console.log(typeof(numeroUsuario));

if (!isNaN(numeroUsuario)) { // Validamos si el usuario esta capturando un número.
    if (numeroUsuario === numeroSecretoSistema) {
        console.log("¡Felicidades! 🎉 Adivinaste el número");
    } else if (numeroUsuario < numeroSecretoSistema) {
        console.log("Tu número es menor que el mío, intenta otra vez")
    } else {
        console.log("Tu número es mayor que el mío, intenta otra vez")
    }    
} else {
    console.log("Solo puedes capturar números válidos, intenta de nuevo");
}
