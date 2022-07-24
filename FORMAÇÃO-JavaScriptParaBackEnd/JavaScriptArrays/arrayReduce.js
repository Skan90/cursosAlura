const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => acum + atual, 0)
    return somaDasNotas/notasDaSala.length
};
console.log(`Média da sala de JavaScript ${mediaSala(salaJS)}`)

console.log(`Média da sala de Java ${mediaSala(salaJava)}`)

console.log(`Média da sala de Python ${mediaSala(salaPython)}`)

const notas = [10, 6.5, 8, 7 ]

const media = notas.reduce((acum, atual) => acum + atual, 0) / notas.length;
console.log(media)

// ESTRUTURA DO REDUCE

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(soma) //170

//Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários

const soma2 = numeros.reduce(function (acum, atual) {
    return atual + acum
   }, 0)

   
console.log(soma2) //170

// Uma terceira forma de reescrever seria escrevendo a função callback fora do reduce():

function operacaoNumerica(acum, atual) {
    return atual + acum
   }

const soma3 = numeros.reduce(operacaoNumerica, 0)

console.log(soma3) //170

//DOCUMENTAÇÃO https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce