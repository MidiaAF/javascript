let num = [3,5,8,9,7]
num.push(1)
num.sort()

console.log(`Nosso vetor é ${num}`)
console.log(`O vetor tem  ${num.length} posições` )
//console.log(num[0])
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(7)
if (pos == -1){ // se o valor não existir ele coloca -1
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor esta na posição ${pos}`)
}

