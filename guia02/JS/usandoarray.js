let phrase = "Separe um texto que contem espaços em um novo array, onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque underscore"
let myArray = phrase.split(" ")
let phraseWithUndescore = myArray.join("_")