/* Deletando propriedades*/

const cliente = {
    nome: "Rafael",
    idade: 32,
    cpf: "11144488852",
    email: "rafael@email.com"
};

console.log(cliente);

// Cria campo e adiciona valor

cliente.fone = "53999999999;"

console.log(cliente);

// Após a criação, o valor de campo já existente é apenas alterado.

cliente.fone = "53988119988;"

console.log(cliente);

// Para remover o campo basta utilizar 'delete'.

delete cliente.fone;

console.log(cliente);