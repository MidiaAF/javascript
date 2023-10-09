function contar() {
    let ini = document.getElementById('txti')//caixa de texto ainda não é numero 
    let fim = document.getElementById('txtf') 
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res') 


    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {//length= comprimento(quantas letras tem dentro)
      res.innerHTML = 'Impossível contar!'
        window.alert(`[Erro] Faltam dados`)
      res.innerHTML = 'Impossível contar!'
    } else {
      res.innerHTML = 'Contando...<br>' 
      let i = Number(ini.value)//transformando cx de texto em numero
      let f = Number(fim.value)
      let p = Number(passo.value)// soma contando
      if(p <= 0 ) {
        window.alert('Passo inválido! Considerando Passo 1')
        p = 1
      }

      if(i < f) { 
        for (let c = i; c <= f; c += p){//(contagem crescente) contador receb ini; c for <= fim ; cont recebe ele mesmo mais o passo
        res.innerHTML += `${c} \u{1F449}` // seta 
      }          
      

       } else{
        for(let c= i ; c>= f ; c -=p){//(contagem regressiva)  contador receb i; contador >=fim ; contador perde o passo
          res.innerHTML += `${c} \u{1f449}` 
        }

       }
      res.innerHTML += `\u{1f3c1}`// bandeira emoji
    }
    
}