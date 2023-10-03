function contar() {
    let ini = document.getElementById('txti')//caixa de texto ainda não é numero 
    let fim = document.getElementById('txtf') 
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res') 


    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert(`[Erro] Faltam dados`)
    } else {
      res.innerHTML = 'Contando...'
      let i = Number(ini.value)//transformando cx de texto em numero
      let f = Number(fim.value)
      let p = Number(passo.value)// soma contando

      if(i < f) { 
        for (let c = i; c <= f; c += p){
        res.innerHTML += `${c} \u{1F449}` // seta 
      }      
     
      res.innerHTML += `\u{1f3c1}`// bandeira emoji
       } else { 

       }

    }
    
}