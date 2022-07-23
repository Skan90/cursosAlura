// DESAFIO - Oferta de seguro
/*Percorrer um objeto, verificar se existe a chave
'dependentes' e, caso exista, enviar uma mensagem 
de oferta de seguro.*/

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
            dataNasc: "28/08/1991"
        }
    ],
    saldo: 100,
    depositar:function(valor){
        this.saldo += valor
    }
};




function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);    
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}
        `);
    };
};

oferecerSeguro(cliente)
console.log(Object.values(cliente))


console.log(Object.entries(cliente)) //array em array - matrizes
