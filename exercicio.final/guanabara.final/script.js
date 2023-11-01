let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){// só aceita numeros entre 0 e 100
    return true
    } else {
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){ // para localizar algo na lista, se o indexOf for diferente de -1  (-1 valor não encontrado na lista)
        return true // retorna verdadeiro
    } else {
        return false 
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){//verificar se é um numero && e se o numero !não consta em lista   
        valores.push(Number(num.value)) // adicionar um elemento no vetor
        let item = document.createElement('option') // adicionar elemento no Select (lista)// toda vez tem select , faz-se um option
        item.text = `Valor ${num.value} adicionado.`   // texto adicionado na lista com string
        lista.appendChild(item)// aparecer na tela ( lista)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já encontrado em lista.')        
    }
    num.value = '' // limpar o campo, inserir novo numero 
    num.focus()//voltar o cursor para o inicio
}

function finalizar(){
    if(valores.length == 0){//se o vetor estiver vazio
        window.alert('adicione valores antes de finalizar!')
    } else {
        let tot = valores.length //saber o total de elementos que tem o vetor
        let maior = valores[0] //O inicio sendo o maior ou menor sempre começa na 1ª posição [0]
        let menor = valores[0]// O inicio sendo o maior ou menor sempre começa na 1ª posição [0] 
        let soma = 0
        let media = 0       
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)  // pos é posição em valores
            maior = valores[pos] // maior valor passa a ser valores pos
        if (valores[pos] < menor)
        menor = valores[pos]       
        }
        media = soma / tot

        res.innerHTML = '' // zerar o res (resultado)
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior} . </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor} . </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma} . </p>`
        res.innerHTML += `<p> A média de todos os valores é ${media} . </p>`

    }
}


