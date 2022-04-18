var numeroSecreto = parseInt(Math.random() * 11);
var rodada = 1;
var count = 0; 
var acertos = 0;
var erros = 0;

function Chutar() {
    count++;

    var elementoRodada = document.getElementById("rodadas")
    var elementoAcertos = document.getElementById("acertos")
    var elementoErros = document.getElementById("erros")
    var elementoContador = document.getElementById("count")
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    
    console.log(chute);


    if (chute == numeroSecreto) {

    elementoResultado.innerHTML = "Você acertou o numero secreto, jogue novamente";
    numeroSecreto = parseInt(Math.random() * 11);
    count = 0;
    rodada++;
    acertos++;
    
    } else if (chute > 10 || chute < 0) {

        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";

    }  else if(chute<numeroSecreto && count<3){

        elementoResultado.innerHTML = "Você errou o numero secreto é maior"
        erros++

    } else if(chute>numeroSecreto && count<3){

        elementoResultado.innerHTML = "Você errou o numero secreto é menor"
        erros++

    } else if(count == 3){

        count = 0;
        elementoResultado.innerHTML = "Você perdeu o numero secreto era " + numeroSecreto + " tente outra rodada"; 
        numeroSecreto = parseInt(Math.random() * 11);
        rodada++;
        erros++

    }
    elementoRodada.innerHTML = rodada;
    elementoAcertos.innerHTML = acertos;
    elementoErros.innerHTML = erros;
    elementoContador.innerHTML = count;
}
