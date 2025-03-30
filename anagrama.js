/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const anagrama = (palabra1, palabra2) => {

    //Verificamos primero que la palabra no sea anagrama
    if (palabra1.toLowerCase() === palabra2.toLowerCase()) return false
    
    //Crearemos una funcion que insertara la palabra en una lista para ordenarla con sort
    const normalizando = palabra => [...palabra.toLowerCase()].sort().join('')//el ... es para concatenar o mejor dicho agregar un texto o numero a una lista.
    

    return normalizando(palabra1) === normalizando(palabra2)

}

console.log(anagrama('hola', 'hola'))//false
console.log(anagrama('roma', 'amor'))//true
console.log(anagrama('listen', 'silent'))//true
console.log(anagrama('Anagrama', 'anagrama'))//false