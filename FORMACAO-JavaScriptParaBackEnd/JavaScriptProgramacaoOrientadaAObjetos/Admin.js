import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    
    }
}

const novoAdmin = new Admin('Skan', 'skan90@email.com', '2022-07-24')
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())