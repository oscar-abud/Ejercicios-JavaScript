/*/Ejercicio 1
// #Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
// - Múltiplos de 3 por la palabra "fizz". - Múltiplos de 5 por la palabra "buzz". - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".

for (let i = 0; i <= 100; i++) {
    
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i}: fizzbuzz`)
    }
    else if (i % 3 == 0) {
        console.log(`${i}: fizz`)
    }
    else if (i % 5 == 0) {
        console.log(`${i}: buzz`)
    }
    
}

console.log()
*/
//-----------------------------------------------------

/*/Ejercicio 2
// #Dentro de un arreglo encuentro el/los numeros que nunca se repiten dentro de la lista.

const lista = [1,2,3,1,0,4,7,1,8,2,7,3,4,8,1,7,6]

// Ocuparemos un filter
const num_unicos = lista.filter(num => lista.indexOf(num) === lista.lastIndexOf(num))

for (let i = 0; i < num_unicos.length; i++) {
    console.log(`El número ${num_unicos[i]} es único.`)
}

console.log()
*/
//-----------------------------------------------------

/* Ejercicio 3
* Escribe un programa que se encargue de comprobar si un número es o no primo.
* Hecho esto, imprime los números primos entre 1 y 100.
*/

/*for (let num = 0; num <= 100; num++) {
    
    console.log(`${num}: ${num % 2 == 0 ? "Numero Par" : "Numero Impar"}`)
    
}

console.log()
*/
//-----------------------------------------------------

//Ejercicio 4
/* Escribe un programa que imprima los 50 primeros números de la sucesión
* de Fibonacci empezando en 0.
* - La serie Fibonacci se compone por una sucesión de números en
*   la que el siguiente siempre es la suma de los dos anteriores.
*   0, 1, 1, 2, 3, 5, 8, 13...


let num1 = 0
let num2 = 1

let res = num1 + num2

console.log(`0: ${num1} + ${num2} = ${res}`)

for (let i = 0; i < 50; i++) {

    num1 = num2
    num2 = res
    res = num1 + num2
    
    console.log(`${i+1}: ${num1} + ${num2} = ${res}`)
    
}
*/

//-----------------------------------------------------

/*Ejercicio 5
    Dado un arreglo desordenado de numeros enteros, encuentra el primer entero positivo (mayor que 0) que falta en la secuencia.
*/

const lista = [3, 4, -1, 1]
//Output 2

const lista2 = [1, 2, 0]
//Output 3

const lista3 = [3, 4, -1, 1, 2, 7, 10]
//Output 5

function encontrar_faltante(lista) {
    
    let numFaltante = 1

    // Mientras el número esté en la lista, aumenta el número
    while (lista.includes(numFaltante)) { // Ocupamos el método includes para saber si el número está en la lista
        numFaltante++   // Aumentamos el número
    }

    console.log(`El número faltante en la lista ${lista} es: ${num}`)
}

console.log()
encontrar_faltante(lista)
console.log("-".repeat(50))
encontrar_faltante(lista2)
console.log("-".repeat(50))
encontrar_faltante(lista3)
console.log("-".repeat(50))