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
    if(l.indexOf(Number(n)) != -1){ // se na lista indexOf for diferente de -1  (-1 valor não encontrado na lista)
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){//verificar se é um numero && e se o numero não consta em lista   
        valores.push(Number(num.value)) // incrementar valores adicionados
        let item = document.createElement('option') 
        item.text = `Valor ${num.value} adicionado.`   
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já encontrado em lista.')        
    }
    num.value = '' // limpar o campo, inserir novo numero 
    num.focus()//voltar o cursor para o inicio
}

function finalizar(){
    if(valores.length == 0){
        window.alert('adicione valores antes de finalizar!')
    } else {
        let tot = valores.length // valor total
        let menor = valores[0]// inicio maior ou menor sempre na 1ª posição
        let maior = valores[0]
        for( let pos in valores){
            if (valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor )
        menor = valores [pos]
        }

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`

    }
}


