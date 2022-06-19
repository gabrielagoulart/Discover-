//Dependendo da condição, teremos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim' // se pao e queijo for verdadeiro, = café top. Se pao e/ou queijo for falso,  = café ruim


//MAIOR DE 18
let age = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

