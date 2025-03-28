/*
    Obten el numero mayor dentro de una lista sin utilizar sort y un solo ciclo for es permitido
*/

const getBiggest1 = (arr) => {
    max_aux = arr[0]
    arr.forEach ( num => {
        max_aux = num > max_aux ? num : max_aux
    })

    console.log(`El numero mayor encontrado fue: ${max_aux}`)
}

lista = [1, 543, 6, 76, 45, 45, 4, 3, 4,3, 43, 768, 9, 6, 6,5,3,4,6,24,545,6,5,23,56,3]

getBiggest1(lista)