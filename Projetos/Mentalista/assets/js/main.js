function Chutar(){
    var numeroSecreto = parseInt(Math.random() * 11);

    var chute = parseInt(document.getElementById("valor").value);
    
    if (chute == numeroSecreto) {
        
        alert("Você ACERTOU! O numero correto é: " +numeroSecreto);
        
    } else if (chute > 10 || chute < 0){
        alert("Numero Invalido, Digite um entre 0 e 10");


    }else {
        alert("Você Errou Tente novamente");
    };
}

Chutar();

//numero de tentativas 3 
// numero secreto maior ou menor na mensagem de erro
//