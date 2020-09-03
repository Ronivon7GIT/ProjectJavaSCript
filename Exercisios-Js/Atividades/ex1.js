function Calculadora(valor1=0,valor2=0,tipoOperacao = '+'){
    switch (tipoOperacao) {
        case '+' : return valor1 + valor2
        case '-' : return valor1 - valor2
        case '/' : return valor1 / valor2
        case '*' : return valor1 * valor2
    } 
}

console.log('Resultado :'+Calculadora(55,55))
console.log('Resultado :'+Calculadora(55,77,'-'))
console.log('Resultado :'+Calculadora(55,99,'/'))
console.log('Resultado :'+Calculadora(55,165,'*'))
