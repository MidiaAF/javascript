let amigo = {nome: 'Jose',
sexo: 'M',
peso: 85.4,
engordar(p=0){ // function
    console.log('engordou')
    this.peso += p
}}
amigo.engordar(2)// engordou 2Kg ( function dentro do objeto)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
    