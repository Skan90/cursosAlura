//DESAFIO - Printar infos
//Acessar um objeto com infos de um cliente e exibir essas informações no console.

const cliente = {
    nome: "Rafael",
    idade: 32,
    cpf: "11144488852",
    email: "rafael@email.com"
};


//notação de ponto.

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)

// substring

console.log(cliente.cpf.substring(0,3))