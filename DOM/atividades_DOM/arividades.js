// Atividade 1 - Mudar cor do título
let titulo = document.querySelector("#titulo");
let azul = document.querySelector("#azul");
let vermelho = document.querySelector("#vermelho");

azul.addEventListener("click", function() {
    titulo.style.color = "blue";
});

vermelho.addEventListener("click", function() {
    titulo.style.color = "red";
});

// Ativadide 2 - Mostrar e esconder parágrafo
let botaoTogle = document.querySelector("#toggle");
let mensagem = document.querySelector("#mensagem");
botaoToggle.addEventListener("click", function() {
  mensagem.classList.toggle("oculto");