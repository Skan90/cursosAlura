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

const paciente = {
    nome: "James T.",
    idade:30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso:80.1,
    altura:1.80,
    calcularIMC:function(){
        return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto:function(){
        console.log(this.nome)
    }
}

let dados = "";
for (let info in paciente) {
    if (typeof paciente[info] === "object" || typeof paciente[info] === "function") {
        continue
    } else {
        dados += `${info} ==> ${paciente[info]}
        `}
    };
    console.log(dados)