ore = 999;

function assenze() {
    n = parseInt(document.getElementById("progresso").value);
    console.log(n);
    assenze = n * 6;
    ore_assenti = ore - assenze;
    percentuale = (100 * ore_assenti)/ore;
    console.log(percentuale);
    document.getElementById("barra").style.width = percentuale + "%";
}


function calcola() {
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let op = document.getElementById("operazione").value;

    let risultato;

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("risultato").innerHTML = "Errore";
        return;
    }

    if (op == "+") {
        risultato = n1 + n2;
    }
    if (op == "-") {
        risultato = n1 - n2;
    }
    if (op == "*") {
        risultato = n1 * n2;
    }
    if (op == "/") {
        risultato = n1 / n2;
    }

    document.getElementById("risultato").innerHTML = risultato;
}