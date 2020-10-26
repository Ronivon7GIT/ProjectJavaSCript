function Aula(nome, videoID){
    this.nome = nome
    this.videID = videoID
}

const aula1 = new Aula('Bem Vindo',456)
const aula2 = new Aula('Até Breve',4789)
console.log(aula1,aula2)

//Simulando o 'new'

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula,'Bem Vindo',456)
const aula4 = novo(Aula,'Até Breve',4789)
console.log(aula3,aula4)
