/*
    Crea una funcion que permita aplanar una lista
    Ejemplo: lista = [1, [1, [2], 2], 1, 2, []]
    Output => lista [1, 1, [2], 2, 1, 2]
*/
lista = [1, [1, [2], 2], 1, 2, []]

const flatten = arr => arr.reduce( (acc, el) =>  acc.concat(el), [])

const result = flatten(lista)
console.log(result)