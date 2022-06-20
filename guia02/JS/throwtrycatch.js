//throw 

function sayMyName(name) {
    if (name == '') {
        throw new Error('O nome é obrigatório') //poderia disparar só uma mensagem
    }
    console.log('Depois do erro')
}

//try...catch
try {
    sayMyName()
} catch(e) {
    console.log(e)
}