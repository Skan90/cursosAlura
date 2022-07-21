// DESAFIO - Compondo um objeto
/*Adicionar dependentes para um dos clientes
cadastrados, com nome idade e parentesco.*/

const cliente = {
    nome: "Rafael",
    idade: 32,
    cpf: "11144488852",
    email: "rafael@email.com",
    fones: ["5553888888888", "5553777777777"]
};


console.log(cliente)

// Adicionando dependentes

cliente.dependentes = {
    nome: "Sarah",
    parentesco: "filha",
    dataNasc: "08/08/2008"
};


console.log(cliente)

// Alterando dado de dependente

cliente.dependentes.nome = "Sarah da Silva";

console.log(cliente)