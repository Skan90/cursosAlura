// tipo de dado
// booleanos

//conversão implícita
const numero = 456;
const numeroString = "456"

console.log(numero === numeroString) //false

//conversão explícita

console.log(numero == numeroString) //true


console.log(numero + numeroString) //456456 concatenação por tipos diferentes

//Number()

console.log(numero + Number(numeroString)) /912

// Se a conversão for com uma string com letras, o retorno será NaN

//String()

