function soma(){
   let soma = 0
   for (i in arguments){  
       soma += arguments[i]       
   }
   return soma
}
// arguments e um array com os parametros que vc passa na função que não contem paramentros.
console.log(soma());
console.log(soma(1,2));
console.log(soma(1,3,5));
console.log(soma('a','b','c'));
console.log(soma(1,2,'teste',5));



