let techs = ['html', 'css', 'js']

// adicionar um item ao fim
techs.push("nodejs")


// adicionar no começo
techs.unshift("sql")


// remover do fim
techs.pop()


// remover do começo
techs.shift()

// pegar somente alguns elementos do array
techs.slice(1, 2) //1= posição inicinal e 2=posição final


// remover 1 ou mais itemns em qualquer posição do array
techs.splice(1, 2) //1= index 2=elementos que quer tirar


// encontrar a posição de um elemento array
let index = techs.indexOf('css')
techs.splice(index,1) //remove