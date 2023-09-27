
function verificar() {
  var data = new Date() //data atual
  var ano = data.getFullYear() //FullYear ano 4 digitos
  var fano = document.getElementById('txtano')//id ano
  var res = document.querySelector('div#res') //id resultado

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')//não colocar idade e se ela for > ano atual
  } else {
   var fsex = document.getElementsByName('radsex') 
   var idade = ano - Number(fano.value)//ano-idade digitada   
   var gênero=''
   var img = document.createElement('img')//é = <img id='foto'>
   img.setAttribute('id', 'foto')

   if (fsex[0].checked){
    gênero = 'Homem'
    if (idade>=0 && idade < 10 ){                
        img.setAttribute('src', 'bb-m.png')
        //Criança
    }else if ( idade <21 ){       
        img.setAttribute('src', 'jovem-m.png')
         //Jovem
    }else if (idade <50 ){
        img.setAttribute('src', 'adulto-m.png')
        //Adulto
    }else {
        img.setAttribute('src', 'idoso-m.png')
        //Idoso
    }
    


   }else if(fsex[1].checked)
   gênero = 'Mulher'    
    
    if (idade>=0 && idade < 10 ){
       img.setAttribute('src', 'bb-f.png')
    //Criança
    }else if ( idade <21 ){
        img.setAttribute('src', 'jovem-f.png')
    //Jovem
    }else if (idade <50 ){
        img.setAttribute('src', 'adulta-f.png')
    //Adulto
    }else (idade <50)
    img.setAttribute('src', 'idoso-f.png')
    //Idoso
  }
  
  //resultado final
  res.style.textAlign = 'center' 
  res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
  res.appendChild(img)
  

  }
  
