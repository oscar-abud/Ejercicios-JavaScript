/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

//Metodo con reduce
const stringReverse = (string) => {
    if (string === '') return 'Error! Cadena vacia'

    //Convertimo el string en una lista con split('')
    const listString = string.split('')

    //Ocuparemos el metodo de reduce para tener un acumulador y su elemento iterado
    const list = listString.reduce((acc, el) => el + acc, '')//Dejamos el acumulador como string vacio

    return list

}

//metodo con forEach
const metodoForEach = (string) => {

    if (string === '') return 'Error! Cadena vacia'

    const listString = string.split('')
    
    let acumulador = ''

    listString.forEach( e => {
        acumulador = e + acumulador
    })

    return acumulador
}

//Metodo reduce
console.log('----------------- metodo reduce -----------------')
console.log(stringReverse('Hola Mundo'))
console.log(stringReverse('racsO yoS'))
console.log(stringReverse('Soy un String invertido'))
console.log(stringReverse(''))

//Metodo forEach
console.log('----------------- metodo forEach -----------------')
console.log(metodoForEach('Hola Mundo'))
console.log(metodoForEach('racsO yoS'))
console.log(metodoForEach('Soy un String invertido'))
console.log(metodoForEach(''))
