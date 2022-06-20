if(true) {

} else {

}


//exemplo
let temperature = 36.5

if (temperature >= 37) {
    alert('Você está com febre')
} else {
    alert('Você não está com febre!')
}


//multiplas condicionais
let temperature = 36

if(temperature >= 37.5) {
    alert('Febre alta')
} else if(temperature < 37.5 && temperature >= 37) {
    alert('Febre moderada')
} else {
    alert('Saudável')
}