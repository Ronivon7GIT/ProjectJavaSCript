const funcs = []

for (let i = 0; i < 10 ; i ++){

   funcs.push(function(){
     console.log(i)
   })

}
//Com a variavel tipo 'Let' ele te a memoria da variavel 'i' no momento da sua inclução no array.
funcs[2]()
funcs[5]()
funcs[6]()
funcs[8]()