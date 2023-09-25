var idade = 15
console.log(`Você tem ${idade} anos`)
if (idade<16){ /* idade menor que 16*/
    console.log(`Não vota`)
} else if( idade <18 || idade > 65) { /*idade entre 16 e 18 e maiores que 65*/
    console.log(`Voto opcional`)     
   
}else { /*idade entre acima de 18 até 64*/
    console.log(`Voto obrigatório`)
}