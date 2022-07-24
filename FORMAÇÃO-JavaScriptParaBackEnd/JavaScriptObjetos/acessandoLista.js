//DESAFIO - Acessar chaves
/*Consultar um objeto utilizando uma
lista de chaves relativas a informações
de clientes gerada pelo sistema e exibir
o resultado na tela.*/

const cliente = {
    nome: "Rafael",
    idade: 32,
    cpf: "11144488852",
    email: "rafael@email.com"
};

// String
const chaveString = "nome"
console.log(cliente[chaveString])


//Array
const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[0]])


// forEach
chaves.forEach(info => console.log(cliente[info]))

// Valor INEXISTENTE no Objeto retorna 'undefined'

console.log(cliente["conta"])