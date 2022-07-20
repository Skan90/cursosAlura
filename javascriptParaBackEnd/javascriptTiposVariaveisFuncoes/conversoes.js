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

let largura = "10";
let altura = "5";
console.log( + largura * + altura); 

// teremos a conversão de String para números realizado usando o + antes das variáveis

// Se a conversão for com uma string com letras, o retorno será NaN

//String()

let telefone = 12341234;
console.log("O telefone é " + String(telefone));

// teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let telefone2 = 12341234;
console.log("O telefone é " + telefone2.toString());

// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.