let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //Return Implícito
console.log(dobro(Math.PI))

let ola = function(){
    return 'olá'
}

ola = () => 'Olá'
ola = _ => 'olá' // possui parametro mas o mesmo não precisa ser passado

console.log(ola())