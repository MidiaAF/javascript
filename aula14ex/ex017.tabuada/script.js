function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    



    if (num.value.length == 0){// se o numero for = a nada       
       window.alert( " [Erro] Por favor, digite um número!")//erro se não digitar nada

    } else {
        let n = Number(num.value) // transformar caixa texto em numero 
        let c = 1 //colocar variavel contador
        tab.innerHTML = '' // antes de receber tab (res) inicia com nada 

        for (let c = 1 ; c <= 10; c++ ){ // tabuada c=1 começa com 1 ate 10 conta ++
           let item = document.createElement('option')//dentro do select pra criar opções tem que ter option
           item.text = ` ${n} x ${c} = ${n*c}` //num x contador = resultado
           item.value = `tab${c}`// toda vez que cria um option tem que fazer value(6*1, 6*2 pra saber qual item foi selecionado)
           tab.appendChild(item) // adicionar um elemento filho que se chama (item) resultado. 

           
           
        }  


        
    }
}
    


    
    

    

   