const cliente = {
    nome: "Rafael",
    idade: 32,
    cpf: "11144488852",
    email: "rafael@email.com",
    fones: ["5553888888888", 
    "5553777777777"],
    dependentes: [
        {
            nome: "Sarah",
            parentesco: "filha",
            dataNasc: "08/08/2008"
        },
        {
            nome: "Bárbara",
            parentesco: "esposa",
            dataNasc: "28//08/1991"
        }
    ],
    saldo: 100,
    depositar:function(valor){
        this.saldo += valor
    }
};

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)