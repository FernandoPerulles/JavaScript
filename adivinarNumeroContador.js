/*
  Script para que el usuario tenga tres oportunidades para adivinar un número aleatorio generado por el sistema.
*/
const numeroSecretoSistema = Math.floor(Math.random() * 10) + 1; 
console.log("(DEBUG) Número secreto:", numeroSecretoSistema); // Truco para probar

let intentos = 0;
const maxIntentos = 3;
let adivinado = false;

while (intentos < maxIntentos && !adivinado) {
    let numeroUsuario = Number(prompt(`Intento ${intentos + 1}: Adivina el número entre 1 y 10`));

    if (isNaN(numeroUsuario)) {
        console.log("Eso no es un número válido. Intenta de nuevo.");
    } else {
        if (numeroUsuario === numeroSecretoSistema) {
            console.log("¡Felicidades! 🎉 Adivinaste el número secreto");
            adivinado = true; // Cambiamos la bandera para salir del ciclo
        } else if (numeroUsuario < numeroSecretoSistema) {
            console.log("Tu número es menor que el mío. 📉");
        } else {
            console.log("Tu número es mayor que el mío. 📈");
        }
        intentos++;
    }
}

// Fuera del ciclo:
if (!adivinado) {
    console.log(`😢 Se acabaron los intentos. El número secreto era: ${numeroSecretoSistema}`);
}
