let visor = document.getElementById('visor');

let btnNumeros = document.getElementsByName('botao-numero');

for (let botao of btnNumeros) {
    botao.addEventListener('click', clica_numero);
}

function clica_numero(event) {
    visor.innerHTML = visor.innerHTML + event.target.innerHTML;
}

let btnOperadores = document.getElementsByClassName('botao-operador');
for (botao of btnOperadores) {
    botao.addEventListener("click", clica_operador);

}
function clica_operador(event) {
    visor.innerHTML = event.target.innerHTML;
}

let botaoC = document.getElementById('botao-C');
botaoC.addEventListener("click", limpa_visor);
function limpa_visor(event) {
    visor.innerHTML = "";
}

let body = document.getElementById(`body`);
body.addEventListener('keypress', pressinou_tecla);
function pressionou_tecla(event) {
    if (event.key === "+") {
        visor.innerHTML = `+`;
    }
}