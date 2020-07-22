//estratégia 1 para valor padrão

function soma1(a,b,c){
  a = a || 1
  b = b || 1
  c = c || 1
  return a + b + c
}

 console.log(soma1(), soma1(3), soma1(3,5,8), soma1(0,0,0) )

//estratégia 1, 2 e 3 para valor padrão
function soma2(a,b,c){
  a = a !== undefined ? a : 1
  b = 1 in arguments ? b : 1
  c = isNaN(c) ? 1 : c
  return a + b + c
}
console.log(soma2(), soma2(3), soma2(3,5,8), soma2(0,0,0) )

//estratégia no es2015
function soma3(a = 0 , b = 0 , c = 0){
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(3,5,8), soma3(0,0,0) )