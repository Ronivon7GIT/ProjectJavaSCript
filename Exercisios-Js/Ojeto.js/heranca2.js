Object.prototype.attr0 = '0'
const avo   = {attr1:'A'}
const pai   = {__proto__ : avo, attr2:'B', attr3: '3'}
const filho = {__proto__ : pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1,filho.attr2,filho.attr3,);

const carro = {
    velAtual : 0,
    velMAx   : 200,
    acelerarMais(delta){
       if(this.velAtual + delta <= this.velMAx){
           this.velAtual += delta
       }else{
           this.velAtual = this.velMAx
       }    
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMAx}Km\h`
    }
}

const ferrari = {
    modelo : 'F40',
    velMax :  324 //Shadowing (sombreamento do atrbuto original da referencia do objeto 'carro' que sera pai de ferrari )
}

const volvo = {
    modelo : 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

volvo.acelerarMais(300)
console.log(ferrari.status())

