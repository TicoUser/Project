function selected(value){
    var dadosLoja = document.getElementsByClassName('dadosLoja');
        if(value != "Selecionar"){
        dadosLoja[0].style.display = 'block';
      }else{
      dadosLoja[0].style.display = 'none';
      }
    }

function q(selector){
   var o = document; 
     return o.querySelector(selector);
   }