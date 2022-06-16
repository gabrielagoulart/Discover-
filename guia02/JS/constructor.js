/*  
    Function() construtor

        * expressão new
        * criar um novo objeto
        *  this keyword
*/

function Person(name) {
    this.name = this.name
    this.walk = function() {
        return this.name + "andando"
    }
}

const mayk = new Person("Mayk")
const joao = new Person("Joao")
console.log(mayk.walk())
console.log(joao.walk()) 