// DESAFIO - Lista de telefones
/*Acessar a lista de números de telefone da pessoa
cadastrada no sistema e imprimi-la, verificando se
há mais de um número em algum cadastro.*/

const cliente = {
    nome: "Rafael",
    idade: 32,
    cpf: "11144488852",
    email: "rafael@email.com",
    fones: ["5553888888888", "5553777777777"]
};

cliente.fones.forEach(fone => console.log(fone));