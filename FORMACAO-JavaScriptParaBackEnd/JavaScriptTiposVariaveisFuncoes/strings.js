const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const stringDeNumeros  ="34567";

const citacao = 'O Rafa disse "Oi!"';
const citacao2 = "O Rafa disse 'Oi!'";
console.log(citacao)
console.log(citacao2)

// concatenação (+)

const citacaoConcat = "Meu nome é ";
const meuNome = "Rafael ";
const tique = '\u2705' //unicode

console.log(citacaoConcat + meuNome + tique)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input2.toLowerCase();

console.log(cidade2 === inputMinusculo); // true

const senhaTamanho = "minhaSenha123"
console.log(senhaTamanho.length) // 13 caracteres