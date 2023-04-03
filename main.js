const botao = document.getElementById("seletor-barra");
botao.addEventListener("click", myFunction);

function myFunction() {
    var pagamentoMensal = document.getElementsByTagName("h3");
    var pagamentoAnual = document.getElementsByTagName("h4");
    var i;
    var n;

    for (i = 0; i < pagamentoMensal.length; i++) {
        for (n = 0; n < pagamentoAnual.length; n++) {
            if (pagamentoMensal[i].style.display === "none") {
                pagamentoMensal[i].style.display = "block";
                pagamentoAnual[i].style.display = "none";
                botao.style.justifyContent = "flex-end"
            } else {
                pagamentoMensal[i].style.display = "none";
                pagamentoAnual[i].style.display = "block";
                botao.style.justifyContent = "flex-start"
            }
        }
    }


}