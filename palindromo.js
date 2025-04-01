/*
    Dada una cadena de texto, comprobar si es un palindromo o no.
    Los palindromos son aquellos textos que se leen igual aun estando invertido
    Por ejemplo: ana, bob, otto, allivessevilla
*/

//Con reduce
const palindromo = string => { 
    if (string === '') return 'Error! Ingrese una cadena de texto.'

    const stringList = string.split('')

    const result = stringList.reduce((acc, it) => it + acc, '')

    return result === string ? `${string} es palindromo: '${result}'` : `${string} no es palindromo: '${result}'`
}

//con forEach
const palindromoForEach = string => {
    if (string === '') return 'Error! Ingrese una cadena de texto.'

    const stringList = string.split('')

    let acumulador = ''

    stringList.forEach( e => {
        return acumulador = e + acumulador
    })

    return acumulador === string ? `${string} es palindromo: '${acumulador}'` : `${string} no es palindromo: '${acumulador}'`
    
}

const palindromoFor = string => {
    if (string === '') return 'Error! Ingrese una cadena de texto.'

    const listString = string.split('')

    let acumulador = ''

    for (let i = 0; i < listString.length; i++) {
        acumulador = listString[i] + acumulador
    }

    return acumulador === string ? `${string} es palindromo: '${acumulador}'` : `${string} no es palindromo: '${acumulador}'`

}

console.log('---------- metodo reduce ----------')
console.log(palindromo('oscar'))
console.log(palindromo('reconocer'))
console.log('---------- metodo forEach ----------')
console.log(palindromoForEach('oscar'))
console.log(palindromoForEach('reconocer'))
console.log('---------- metodo for ----------')
console.log(palindromoFor('oscar'))
console.log(palindromoFor('reconocer'))