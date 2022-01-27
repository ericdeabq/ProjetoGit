function verificarPrimo() {

    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert(`Digite um numero válido`);
        inNumero.focus();
        return;
    }

    var numDivisores = 0; //declara e inicializa contador

    for (var i = 1)
}