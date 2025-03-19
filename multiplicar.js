/*
Haz posible una multiplicacion sencilla entre dos numeros, pero sin ocupar el '*' para la operacion
*/

function multiplicar(a, b){ //'b' sera la cantidad de veces multiplicado 'a'

    let resultado = 0
    //Math.abs devuelve el valor absoluto
    const positivo = Math.abs(b) == b //Compara a b sin signos con 'b' que puede ser negativo o no
    //En caso de que sea positivo la comparacion arroja true

    //Verificamos que si b es 0, todo resultado sera 0
    if (b == 0) return 0

    for (let num = 0; num < Math.abs(b); num++) {
        //Con operador ternario
        resultado = positivo ? resultado + a : resultado - a
        
        /* Con If Else
        if (positivo){
            resultado = resultado + a
        } else {
            resultado = resultado - a
        }*/
    }
    
    return resultado
}

const res = multiplicar(7, 4)
const res2 = multiplicar(9, 9)
const res3 = multiplicar(8, 6)

console.log(res)
console.log(res2)
console.log(res3)