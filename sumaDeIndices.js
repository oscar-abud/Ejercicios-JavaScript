/*
    Dada una lista de números enteros y un número target, determina los índices de los dos números en la lista que suman el número target.
    Por ejemplo, si la lista es [2, 7, 11, 15] y el target es 9, la función debe devolver [0, 1] porque nums[0] + nums[1] es igual a 9.
    Si no hay solución, la función debe devolver un array vacío.
*/

const lista = [2, 7, 11, 15, 5, 1, 4]

const target = 11 //salida [1, 6]

const sumdaIndices = (array, target) => {

    for (let i = 0 ; i < array.length ; i++) {
        if (array[i] < target){
            for (let j = 0 ; j < array.length ; j++){
                if (array[j] < target && array[i] + array[j] == target ) {
                    return `De la lista ${array} \n${i} + ${j} = ${target}, \nlos indices de la suma: [${i}, ${j}]`
                }
            }
        }
    }
    // Si no se encuentra una solución, devuelve un mensaje indicando que no hay solución
    return 'No hay solución'
}

const sumdaIndices2 = (array, target) => {

    let resultado = 'No hay solución'

    let encontrado = false

    array.forEach( (i, id1) => {
        if (encontrado) return
        if( i < target) {
            array.forEach( (j, id2) => {
                if (j < target && i + j == target) {
                    resultado = `De la lista [${array}]\n${i} + ${j} = ${target}\nLos índices de la suma: [${id1}, ${id2}]`

                    encontrado = true//Para que corte el forEach
                }
            })
        }
    })
    return resultado
}

const sumdaIndices3 = (array, target) => {
    for (let i of array) {
        if (i < target) {
            for (let j of array) {
                if (j < target && i + j == target) {
                    return `De la lista [${array}]\n${i} + ${j} = ${target}\nLos índices de la suma: [${array.indexOf(i)}, ${array.indexOf(j)}]`
                }
            }
        }
    }
    return 'No hay solución'
}

console.log('\nCon el metodo "for"')
console.log(sumdaIndices(lista, target))
console.log('\nCon el metodo "forEach"')
console.log(sumdaIndices2(lista, target))
console.log('\nCon el metodo "for of"')
console.log(sumdaIndices3(lista, target))
