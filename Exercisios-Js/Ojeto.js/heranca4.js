function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const objt1 = new MeuObjeto
const objt2 = new MeuObjeto
console.log(objt1.__proto__ === objt2.__proto__)
console.log(MeuObjeto.prototype === objt1.__proto__)

MeuObjeto.prototype.nome ='Anônimo'
MeuObjeto.prototype.fala = function(){
    console.log(`Bom Dia! Meu nome é ${this.nome}`);
}

objt1.fala()

objt2.nome = 'Rafael'
objt2.fala()

const obj3 = { }
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.fala()

//Resumindo ...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
