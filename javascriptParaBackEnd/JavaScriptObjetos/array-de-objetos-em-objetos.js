// DESAFIO - Lista de dependentes
/*Verificar a melhor forma de agregar a informação de 
um novo dependente ao objeto Cliente.*/

const cliente = {
    nome: "Rafael",
    idade: 32,
    cpf: "11144488852",
    email: "rafael@email.com",
    fones: ["5553888888888", 
    "5553777777777"],
    dependentes: [{
        nome: "Sarah",
        parentesco: "filha",
        dataNasc: "08/08/2008"
    }]
};


console.log(cliente)

// Adicionando atráves do "push" no array novo dependente
cliente.dependentes.push({
    nome: "Bárbara",
    parentesco: "esposa",
    dataNasc: "28//08/1991"
})

console.log(cliente)

// buscando dependente mais nova pela data de Nascimento

const depedenteMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="08/08/2008")

console.log(depedenteMaisNova)

// Exibindo apenas o nome dentro da Array.

console.log(depedenteMaisNova[0].nome)