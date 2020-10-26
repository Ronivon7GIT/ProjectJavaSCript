const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'copo de plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 2000 && p.fragil
}))