// parametros de função


function soma (numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(2, 2))
console.log(soma(32, 64))
console.log(soma(64, 128))
console.log(soma(256, -128))

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}.`;
}

console.log(nomeIdade("Rafael", 32))

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5), soma(3,3)))


console.log(multiplica(soma(4,5)))

// function cumprimentar(){
//     console.log('Oi gente!')
//    }
   
// cumprimentar()

function cumprimentar(){
    return 'Oi gente!'
   }
   
cumprimentar()


function cumprimentaPessoa(nomePessoa){
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
cumprimentaPessoa('Rafael')

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
console.log(operacaoMatematica(15, 30, 45)) // 90