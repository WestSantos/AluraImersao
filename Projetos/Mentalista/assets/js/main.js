var count= 0




    function Chutar(){
        var numeroSecreto = parseInt(Math.random() * 11);
        count++
        
        var elementoResultado = document.getElementById("resultado");
        var chute = parseInt(document.getElementById("valor").value);
        
 

            if (chute == numeroSecreto) {
                
                elementoResultado.innerHTML = "Você acertou";
                
            } else if (chute > 10 || chute < 0){
                elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
        
            }else if(count == 3){
                elementoResultado.innerHTML = "Você errou 3 vezes o numero correto era "+numeroSecreto;
            }else {
                elementoResultado.innerHTML = "Errou, tente novamente";
            };
        console.log(numeroSecreto)
        console.log(count)
            
        };
    

 

