//DESAFIO - Puxando relatório
/*Percorrer um objeto e extrair informações básicas
do cliente em um formato mais legível e de forma
automatizada para fornecer a outros departamentos do banco*/

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

let relatorio ="";

for(let info in cliente)
{
    if( typeof cliente[info] === "object" || 
    typeof cliente[info] === "function")
    {
        continue;
    }else {
        
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
};

console.log(relatorio); // CHAVE com 'info'