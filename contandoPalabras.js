/*
    Escribir una funcion que cuente las veces que se repite una palabra
*/

const repeated = (str) => {
    const lowered = str.toLowerCase()
    const splitted = lowered.split(' ')
    const reduced = splitted.reduce( (acc, el) => {
        if (acc[el]) {//Pregunta si el valor del indice de ese acumulador ya existe
            acc[el]++ //Le sumamos 1
        } else {
            acc[el] = 1 //Le creamos 1
        }
        return acc
    }, {})
    //Con Object.entries convertimos la lista en clave y valoro y para eso necesitamos reduce((acc, el))
    return Object.entries(reduced).reduce( (acc, el) => acc[1] > el[1] ? acc : el)
}

const result = repeated('Esto es una prueba para ver si tengo palabras repetidas o no o si')
console.log(result)