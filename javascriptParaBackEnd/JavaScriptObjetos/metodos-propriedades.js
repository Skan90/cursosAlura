// DESAFIO - Cliente poupança
/*Aproveitar o Cliente que já existe e criar a partir dele um
novo tipo de cliente para contas poupança.*/

class Cliente {
    //As necessidades para criação do "cliente"
    constructor(nome, email, cpf, saldo)
    {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    
    // não precisa escrever function, é um metódo no contexto é uma função
    
    depositar(valor)
    {
        this.saldo += valor
    }
    exibirSaldo()
    {
        console.log(this.saldo)
    }
    
}

// super passa as propriedades que queremos que a class herde
// this acrescentamos as propriedades a mais da classe

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    //criação do metódo para depósito apenas para essa classe

    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }

}


const rafael = new ClientePoupanca("Rafael", "r@email.com", "44447777885", 120, 500)

console.log(rafael)

rafael.depositar(200)
rafael.depositarPoupanca(180)

console.log(rafael)