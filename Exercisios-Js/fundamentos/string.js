const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3))// resultado de referencia do indice da posição da string em codigo da tabela ACCI
console.log(escola.indexOf('C'))//qual a posição da string se não existir retorna -1
console.log(escola.substring(1))// restorna a string da posição mensionada ate o final
console.log(escola.substring(2,4))// restorna a string da posição mensionada no primeiro parametro ate o final que esta no segundo parametro

console.log('Escola '.concat(escola).concat("!"))// concatena a string
console.log('Escola '+ escola + "!")// concatena a string

console.log(escola.replace(3,'e'))// substitue uma determinada string por outra

console.log('ana, maria, pedro'.split(','))//transforma a string em array separando a partir da ','
