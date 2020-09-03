//usando a notação literal
const obj1={}
console.log(obj1)

//object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funções contrutoras
function Produto(nome, preco, desc){
     this.nome
     this.getPrecoComDesconto = () =>{
        return preco * (1 - desc) 
     }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('NoteBook', 2999.99, 0.25)

//Função Factory
function CriarFuncionario(nome, salarioBase, faltas){
    return{
       nome,
       salarioBase,
       faltas,
       getSalario(){
           return (salarioBase / 30) * (30 - faltas)
       }   
    }
}

const f1 = CriarFuncionario('João',7980, 4)
const f2 = CriarFuncionario('Maria',11400, 7)
console.log(f1.getSalario(),f2.getSalario())

//object.create
const filha = Object.create(null)
filha.nome='Ana'
console.log(filha)

//Um função famosa que retorna objeto..
const fromJSON = JSON.parse('{"info":"Sou um JASON"}')
console.log(fromJSON.info)
