/*
Obten el numero mayor dentro de una lista sin utilizar sort y un solo ciclo for es permitido
*/

//lista
lista = [1, 543, 6, 76, 45, 45, 4, 3, 4,3, 43, 768, 9, 6, 6,5,3,4,6,24,545,6,5,23,56,3]

//Con forEach
const getBiggest1 = (arr) => {
    max_aux = arr[0]
    arr.forEach ( num => {
        max_aux = num > max_aux ? num : max_aux
    })
    return max_aux
}
const res = getBiggest1(lista)
console.log('Metodo forEach')
console.log(`El número mayor encontrado fue: ${res}`)

//Con reduce
const getBiggest = (arr) => arr.reduce((acc, num) => acc > num ? acc : num)
const result = getBiggest(lista)
console.log('Metodo reduce')
console.log(`El número mayor encontrado fue: ${result}`)