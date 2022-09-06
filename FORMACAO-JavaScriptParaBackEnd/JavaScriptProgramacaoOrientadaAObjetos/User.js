
//ecmascript module ESM
export default class User {
    
    /*Atributos privados (adicionados com cerquilha e declarados antes do constructor) 
    servem para impedir o acesso de outras partes do código a um determinado dado, 
    no caso uma propriedade, ou pode ser um método que não pode ser acessado também, 
    por fora da classe, só por dentro da classe. Os métodos dentro da classe 
    conseguem acessar as propriedades da classe. Exceção: Atributos expostos*/
    
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }
    
    // get é uma propriedade readOnly
    get nome() {
        // get permite lógica condicional (if, else etc)
        // porém na chamada não precisa de "()" parênteses.
        // Usa-se a sintaxe de própriedade
        return this.#nome
    }
    
    get email() {
        return this.#email
    }
    
    
    get nascimento() {
        return this.#nascimento
    }
    
    
    get role() {
        return this.#role
    }
    
    
    get ativo() {
        return this.#ativo
    }
    
    set nome(novoNome){
        if(novoNome === ''){
            throw new Error('formato não válido')
        }
        this.#nome = novoNome
    }
    // Boas práticas, cada get com sua única função definida.
    
    // #montathis() {
    //     return({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     })
    // }
    
    exibirInfos(){
        // const objUser = this.#montaObjUser()
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }
}

