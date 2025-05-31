/* El juego del ahorcado consiste en adivinar las letras de una palabra que se muestra al azar.
Se muestran las vidas y las letras incorrectas. También muestra si se ingresa un caracter invalido.
*/

//Definición de variables, constantes y arreglos.

let letra = '';
let vidas = 5;
const palabras_adivinar = ['gato', 'perro', 'paloma', 'conejo', 'hamster'];
let palabra_azar = palabras_adivinar[Math.floor(Math.random() * palabras_adivinar.length)];
const caracteres_invalidos = ["@", "*", "+", "/", "$", "%", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const palabra_oculta = Array(palabra_azar.length).fill("_");
let letras_incorrectas = [];

/*Ciclo while para validar que las vidas sean mayores a 0 y que la constante palabra oculta
incluya los guiones.
Se muestra en pantalla "Adivina la palabra" y las vidas. 
Se pide al usuario ingresar una letra y se muestran las letras incorrectas, en caso
de que se ingrese alguna */

while (vidas > 0 && palabra_oculta.includes("_")) {
    alert("Adivina la palabra:  " + palabra_oculta.join(" "));
    alert("Vidas: " + vidas);
    let letra = prompt("Ingresa una letra", palabra_oculta);
    if (letras_incorrectas.length) {
        alert('Letras incorrectas: ' + letras_incorrectas)
    }

//Ciclo for para verificar si se ha ingresado un caracter invalido.

    for (let i = 0; i < caracteres_invalidos.length; i++) {
        if (caracteres_invalidos[i] == letra) {
            alert('Caracter invalido')
        }
    }

/*Ciclo if para comprobar que la letra ingresada sea la letra de la palabra al azar.
Se verifica que se ingrese solo una letra y no varias al mismo tiempo.
Se usa nuevamente un ciclo while para verificar que no se descuenten vidas si se incluye
un caracter invalido.
Las vidas solo se restan si el usuario ingresa una letra incorrecta.
*/
    if (palabra_azar.includes(letra)) {
        for (let i = 0; i < palabra_azar.length; i++) {
            if (palabra_azar[i] == letra) {
                palabra_oculta[i] = letra;
            }
        }
    } else if (letra.length > 1) {
        alert('Ingresa solo una letra')
    } else {
        while (!caracteres_invalidos.includes(letra)){
            vidas--;
            
            letras_incorrectas.push(letra)
            break
        }
    }
}

/*El juego acaba cuando el usuario no adivine la palabra y se quede sin vidas.
Y lo gana cuando adivine las letras de la palabra*/
if (vidas < 1 && palabra_oculta.includes("_")) {
    alert('Has perdido, la palabra era : ' + palabra_azar)
} else {
    alert('Has ganado : ' + palabra_azar)
}