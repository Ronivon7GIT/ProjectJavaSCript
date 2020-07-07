const funcs = []

for (var i = 0; i < 10 ; i ++){

   funcs.push(function(){
     console.log(i)
   })

}
//Com a veriavel tipo 'Var' ele não tem memoria do momento que foi armazenada a função anonima no array, 
//somente o valor final de 'i'.
funcs[2]()
funcs[5]()
funcs[6]()
funcs[8]()