const notas = [6.7, 7.4, 8.5, 9.0, 9.5]

for(let i in notas){
  console.log(i, notas[i]);
}

const pessoa = {
    nome:'Paula',
    sobrenome:'Costa',
    Idade:29,
    peso:64
}

for (let atributo in pessoa){
   console.log(`${atributo} = ${pessoa[atributo]}`) 
}