let nomes = ["ana Julia", "Caio vinicius", "BIA silva"]

const nomesAtualizados = nomes.map(nome => nome.toLocaleUpperCase());


//é possível utilizar alguns métodos de array e laços de repetição para acessar e alterar strings:
console.log(nomesAtualizados)

const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA