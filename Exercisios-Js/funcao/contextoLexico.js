const valor = 'Global'

//A memoria da função de que variavel esta sendo usada no momento em que foi criada.
function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()