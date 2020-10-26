const ferrari = {
   modelo : 'f40',
   vlMax : 324

}

const volvo = {
   modelo : 'v40',
   vlMax : 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)

