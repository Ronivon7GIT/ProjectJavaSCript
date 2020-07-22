   function pessoa(){
      this.idade = 0
      
         const self = this // para que ele referencie o contexto dentro da função em que foi criado a variavel 'idade'
         
         setInterval(function (){
            self.idade++
            console.log(self.idade)   

         }/*.bind(this)*/, 1000) /// O 'Bind' amarra o que esta sendo usando com o contexto em que foi criado a variavel

   }

   new pessoa  
   