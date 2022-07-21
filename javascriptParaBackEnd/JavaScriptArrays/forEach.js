const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// callback
// notas.forEach( nota => {
//     somaDasNotas += nota
// });

console.log("Fora do forEach", somaDasNotas)

notas.forEach(function(nota){
    console.log("antes", somaDasNotas)
    somaDasNotas += nota
    console.log("depois", somaDasNotas)
})

console.log(somaDasNotas)

let media = somaDasNotas/notas.length;

console.log("Valor da média pela quantidade de elementos no array 'notas'", media)