document.getElementById("submit").onclick = function (e) {
    const nome = document.getElementById("nome").value
    const primeiraNota = parseFloat(document.getElementById("nota1").value)
    const segundaNota = parseFloat(document.getElementById("nota2").value)
    const terceiraNota = parseFloat(document.getElementById("nota3").value)
    const quartaNota = parseFloat(document.getElementById("nota4").value)
  
    const notaFinal = (
      (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4).toFixed(1)
  
    let resultado
  
    if (notaFinal >= 6) {
      resultado = "Aprovado(a)"
    } 
    else if (notaFinal <= 5) {
      resultado = "reprovado(a)"
    }
  
    document.getElementById("resultado").innerHTML = nome + ` você ficou com nota <strong>${notaFinal}</strong> e foi <strong>${resultado}</strong>`
  }






