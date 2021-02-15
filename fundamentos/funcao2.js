//Armazenando função em variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma (1, 3)

//Armazenando uma função arrow em variavel
const soma = (a, b) => { return a + b }
console.log(soma(2, 3))

//Arrrow retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2,3))
