function SayMyName(name) {
    console.log('antes de executar a função callback')

    name()

    console.log('Depois de executar a função callback')
}

SayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)