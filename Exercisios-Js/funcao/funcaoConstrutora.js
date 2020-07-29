function Carro(velocidadeMaxima = 200 , delta = 5){
     //Atributo Provado
    let velocidadeAtual = 0
     
    //Metodo piblico
    this.acelerar = function(){
      if(velocidadeAtual + delta <= velocidadeMaxima){
          velocidadeAtual += delta
      }else{
          velocidadeAtual = velocidadeMaxima
      }  
    }

    //Metodo piblico
    this.getVelocidadeAtual =function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())