function EmReal(valor){
    return 'R$ =' + valor.toFixed(2).toString().replace('.',',')
}

console.log(EmReal(30.000046))