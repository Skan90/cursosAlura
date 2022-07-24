const nomes = ["Rafael", "Arthur", "Sarah", "Bárbara"]
const notas = [7, 4.5, 8, 8.5]

const reprovados = nomes.filter((_, indice) => notas [indice] < 5);

console.log(`Reprovados: ${reprovados}`)