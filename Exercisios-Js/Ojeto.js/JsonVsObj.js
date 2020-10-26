const obj = { 
     a : 1,
     b : 2,
     c : 3,
     Soma(){
         return a +b +c
     } 
  }

  console.log(JSON.stringify(obj))//Transforma um objeto em um JSON

  console.log(JSON.parse('{"a" : 1 , "b" : "String" , "c" : true , "d" : {} , "e" : []  }')) // Parse verifica se é um JSON valido