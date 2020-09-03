function Triangulo(lado1, lado2, lado3){
    if (lado1 == lado2) {
       if (lado1 == lado3) 
            return 'Esse é um triângulo Equilátero'
       else
            return 'Esse é um triângulo Isóceles' 
    }else if (lado2 == lado3) {
        if (lado1 == lado3) 
            return 'Esse é um triângulo Equilátero'
        else
            return 'Esse é um triângulo Isóceles' 
    }else if (lado1 == lado3)
            return 'Esse é um triângulo Isóceles' 
    else
       return 'Esse é um triângulo Escaleno' 
}

console.log(Triangulo(1,2,1))
console.log(Triangulo(1,1,1))
console.log(Triangulo(1,2,2))
console.log(Triangulo(1,2,3))
console.log(Triangulo(3,3,3))