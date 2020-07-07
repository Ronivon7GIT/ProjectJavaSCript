function multiplicar(a ,b ){
       console.log(a * b)  
}

multiplicar(56,89)

//Armazenando uma função em uma variavel.
const imprimirSoma = function (a,b){
        console.log(a+b)
}

imprimirSoma(50,30)

//Armazenando uma função Arrow em uma variavel.
const soma = (a,b) => {
    return a + b
}

console.log(soma(150,300))

//Retorno implícito
const subtracao = (a,b) => a - b   //  Função Arrow reduzida
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legallllll!!!!!')