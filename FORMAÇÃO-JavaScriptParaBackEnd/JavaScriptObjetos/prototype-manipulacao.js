//DESAFIO - Cliente poupança
/*Aproveitar o Cliente que já existe e criar a partir
dele um novo tipo de cliente para contas poupança.*/

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

function clientePoupanca(nome, cpf, email, saldo, saldoPoup)
{
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup;
}

const babi = new clientePoupanca("Barbara", "1112220002245", "babi@email.com", 100, 200)

console.log(babi)

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
};


babi.depositarPoup(90)

console.log(babi.saldoPoup)