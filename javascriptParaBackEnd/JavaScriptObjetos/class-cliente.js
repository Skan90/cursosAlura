class Cliente {
    //
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

const rafael = new Cliente("Rafael", "rafael@email.com", "11144477788", 190)

rafael.exibirSaldo();

console.log(rafael)