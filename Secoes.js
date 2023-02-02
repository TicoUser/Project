var dropdown = document.getElementById("droplist") // seleciona o elemento select
            optionPrev = "null" // seta valor vazio para primeira seleção
            function onCatChange() {
              if ( dropdown.options[dropdown.selectedIndex].value != -1 ) { // validação para option vazia
                var option = dropdown.options[dropdown.selectedIndex].value; // pega value do option selecionado
                if( optionPrev != "null") { // validação para primeira seleção vazia
                  var optionHide = document.getElementById(optionPrev); // seleciona Div em exibição
                  optionHide.classList.toggle("show"); // esconde Div em exibição, alternando a class
                } 
                var optionShow = document.getElementById(option); // seleciona Div recem selecionada
                optionShow.classList.toggle("raiseSunshine"); // exibe Div selecionada, alternando a class
                optionPrev = option; // seta valor da Div selecionada para pode ser encondida quando necessário
              }
            }
            dropdown.onchange = onCatChange; // escuta as mudanças do campo select