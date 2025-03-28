/*
    Con solo una iteracion, muestrame una lista limpia desde una lista con undefined, false, 0 y null
*/

lista = [3, 34, null, false, 12, 0, undefined, 67, 19]

const clean = (arr) => arr.reduce( (acc, el) => {
        if (el) {
            acc.push(el)
        }
        return acc
    }, [])


const result = clean(lista)
console.log(result)