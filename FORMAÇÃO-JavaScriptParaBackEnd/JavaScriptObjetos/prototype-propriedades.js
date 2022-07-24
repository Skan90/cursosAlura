// DESAFIO - Cliente genérico
/*Gerar uma função que permita a criação de
novos clientes a partir de um modelo*/

function Cliente(nome, cpf, email, saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const rafael = new Cliente("Rafael", "1114448884", "rafael@email.com", 100)

console.log(rafael)

// No Console do Navegador:
// rafael.__proto__
// rafael.__proto__.__proto__
//console do navegador trás propriedades não enumeráveis
//Construtor de objeto, ou seja, o nosso cliente, a nossa função cliente,
//utilizou o construtor objeto, e a nossa instância andre utilizou o construtor cliente,
/// chamamos isso de cadeia de protótipo