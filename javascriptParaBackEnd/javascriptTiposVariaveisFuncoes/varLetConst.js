//var 

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area)

var area;

//let 

let forma = 'retângulo';
let alt = 5;
let comp = 7;
let areaRetangulo;

if (forma === 'retângulo') {
    areaRetangulo = alt * comp;
} else {
    areaRetangulo = (alt * comp) / 2;
}

console.log(areaRetangulo)

// const 

//const Forma = "quadrado";
const Forma = "Triangulo";
const Altura = 5;
const Comprimento = 7;
let areaQuadrado;

if (Forma === 'quadrado') {
    areaQuadrado = Altura * Comprimento;
} else {
    areaQuadrado = (Altura * Comprimento) / 2;
}


console.log(areaQuadrado)