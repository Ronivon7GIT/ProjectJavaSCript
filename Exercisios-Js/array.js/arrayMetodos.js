const pilotos = ['Vettel', 'Alonso', 'Raikkonen','Massa']
pilotos.pop() // Remove o ultimo elemento do array

pilotos.push('Vestappen')
console.log(pilotos)

pilotos.shift()//REmove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')//Adiciona um elemento na primeira posição
console.log(pilotos)
              // apartir de que posição |parametro para execluir se caso for 'zero' não exclui | parametro para incluir da posição do primeiro parametro
pilotos.splice(2                        ,0                                                      ,'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3,1)//Remove da possição que queres e quantas possições voce quiser apartir da posição que selecionou  
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//novo array apartir do indice selecionado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)//novo array apartir do indice inical e final
console.log(algunsPilotos2)

