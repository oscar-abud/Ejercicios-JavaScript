/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const parImpar = () => {
    for (let i = 0; i<=100; i++) {
        console.log(`${i}: ${i%2==0 ? 'es Numero Par' : 'es Numero Impar'}`)
    }
    return 'Proceso finalizado!'
}

console.log(parImpar())