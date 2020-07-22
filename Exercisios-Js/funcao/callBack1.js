const fabricantes = ["Mercedes","Audi","BMW"]

function imprimir(nome,indice){
    console.log(`${indice + 1}. ${nome}`)
}
/*
Para cada elemento do array ele dispara uma função como callback
*/
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))
