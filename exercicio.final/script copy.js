var valor = [] //array 
const num = document.getElementById('dignum'); // adicionar numero  
const inf = document.getElementById ('fin'); //bloco com os numeros digitados em num na lista 
const res = document.getElementById('res') // resultado final



function adicionar(){ 
    if(num.value.length == 0 ||num.value <1|| num.value >100)  { //digite entre 1 e 100
        window.alert('Digite um número entre 1 e 100 ou valor já adicionado!');
        
    } else {    
        var valoradicionado = parseInt (num.value);// parseInt para converter o valor do campo de entrada(valor) em um apenas o 'número' inteiro antes de adicioná-lo à matriz(finalizar)       
        if(valor.includes(valoradicionado)){ //antes de adicionar um número à lista, verificamos se ele já existe no array valor usando valor.includes(valoradicionado). Se o número já estiver na lista, exibimos um alerta informando que ele já foi adicionado. Isso evita a repetição de números na lista.
            window.alert('Este valor já foi adicionado!')
            res.innerHTML = '' // limpar quando acrescentar numero
        }else{
        valor.push(valoradicionado); // adicionar o valor a matrix
        var item = document.createElement('option') // criando elemento OPTION no bloco dentro de select 
        item.innerText = `Valor ${num.value} adicionado` //escrever o texto e o valor adicionado dentro do bloco
        inf.appendChild(item)  // aparecer na tela(bloco) o que foi digitado em num
       
        num.focus()   // para o cursor ficar em num novamente
        num.value = ''      //apagar o valor que fica no num  
    }   
}
 }

        function finalizar(){ 
            
            if (valor.length == 0) {
                window.alert( 'Você ainda não adicionou valores, tente novamente ');// adicionar um numero antes de clicar finalizar           
             } else {
            var maior = 0
            var menor = 100
            var soma = valor.reduce((valor, length) => valor + length, 0); // a soma de todos valor usa função reduce
            var media = soma / valor.length; // a média de todos valor

            for ( let i=0; i<valor.length;i++) {// console.log(i) i é letra aleatória   // console.log(valor[i])   
              if(valor[i] > maior){
                    maior = valor[i]
                }
                    if(valor[i] < menor){
                    menor = valor[i]                
            }            
        }       
       
            console.log(res)
            res.innerHTML = //escrever em res o resultado de finalizar
            `<p>Ao todo, temos ${valor.length} números cadastrados.
            </p> <p>O maior valor informado foi o ${maior}</p> 
            <p>O menor valor informado foi o ${menor}</p>
            <p>Somando todos os valores, temos ${soma}</p>
            <p>A média dos valores informados é ${media}</p>`;
            fin.value = ''          
                       
                     }          
                 }
                 
       

                
        
    
        
    
    

        



 










 