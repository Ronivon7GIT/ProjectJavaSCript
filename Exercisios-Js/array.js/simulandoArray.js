const quaseArray = {
   0 : 'Rafael',
   1 : 'Ana',
   2 : 'Bia'
}
console.log(quaseArray)

Object.defineProperty(quaseArray,'toString',{
    value : function(){ return Object.values(this)},
    enumerablre: false
})

console.log(quaseArray[0])

const meuArray = ['Jordan','Rafa','Ana','Bia']
console.log(quaseArray.toString(),meuArray)