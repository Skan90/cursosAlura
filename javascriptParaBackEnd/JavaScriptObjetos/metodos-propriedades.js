// DESAFIO - Cliente poupança
/*Aproveitar o Cliente que já existe e criar a partir dele um
novo tipo de cliente para contas poupança.*/

class Cliente {
    //As necessidades para criação do "cliente", as PROPRIEDADES
    constructor(nome, email, cpf, saldo)
    {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    
    // não precisa escrever function, é um metódo no contexto é uma função
    // METÓDOS para interação e comportamentos para esse objeto
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
// Classe NÃO LEVA PARAMÊTRO "()"
// Elas são todas passadas no CONSTRUTOR "{}"

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    //criação do metódo para depósito apenas para essa classe

    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }

}

// CRIAÇÃO  DO OBJETO, tendo como base a CLASSE e suas PROPRIEDADES
const rafael = new ClientePoupanca("Rafael", "r@email.com", "44447777885", 120, 500)

console.log(rafael)


// Os METÓDOS (ou  FUNÇÕES) criados e herdados, 
// estão todos disponíveis para uso com o OBJETO depois da CRIAÇÃO.

// Primeiro se chama a "nova instância" (rafael)
// e logo após o metódo disponível (depositar ou depositarPoupanca)
// Exemplo:
rafael.depositar(200)
rafael.depositarPoupanca(180)

console.log(rafael)


//CLASSES são consideradas como FUNÇÕES
// (Syntatctic Sugar: https://sophiali.dev/syntactic-sugar-examples-javascript)
//Porém as CLASSES diferente das FUNÇÕES NOMEADAS (não anonimas)
// NÃO TEM HOISTING, ou seja, não podem ser chamadas antes de ser
// declaradas no código.
console.log(typeof ClientePoupanca)