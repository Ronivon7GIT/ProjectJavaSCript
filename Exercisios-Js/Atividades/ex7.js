function Baskara(a,b,c){
   let delta = Math.pow(b,2)-((4*a)*c)
   let x1, x2 

   if(delta > 0){
     x1 = Math.pow((-b +delta),(1/2)) / (2 *a)
     x2 = Math.pow((-b -delta),(1/2)) / (2 *a)
     return console.log("A Equação possui 2 raizes reais  x1 ="+x1+" e x2 = "+x2+" delta = "+delta);
   }else if (delta == 0){
      x1 = -b /(2*a)
      return console.log("A Equação possui 1 raiz real  x1 ="+x1+" delta = "+delta); 
   }else
    return console.log("A Equação não possui raizes reais. Delta = "+delta);   
   
}

Baskara(3,-5,12)