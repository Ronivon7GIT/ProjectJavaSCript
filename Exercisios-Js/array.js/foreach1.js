const aprovados = ['Agatha','Aldo','Daniel','Raquel']

//Para cada item do arra o Foeach executa a fução passada por parametro
// parametro do foreach nome, indice e array
aprovados.forEach(function(nome, indice,array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(aprovados) )

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)