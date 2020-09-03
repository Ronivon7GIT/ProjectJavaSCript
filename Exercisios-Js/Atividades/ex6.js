function JurosSimples(capitalnicial , taxaDeJuros , tempoDeAplicacao){
    return capitalnicial * taxaDeJuros * tempoDeAplicacao
} 

function JurosComposto(capitalnicial , taxaDeJuros , tempoDeAplicacao){
    return (capitalnicial * Math.pow((1+taxaDeJuros),tempoDeAplicacao))
} 

console.log(JurosSimples(1000,0.10,3))//Retorna o juros simples cobrado após tres anos
console.log(JurosComposto(500.000,0.05,3)) //Retorna o montante final juntamente com os juros compostos apos 3 anos