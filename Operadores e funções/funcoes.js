function saudacao() { // Função sem retorno e sem parametro 
    console.log("Olá, JavaScript!");
}
saudacao();
function saudacaonome(nome) { // Função com parametro mas sem retorno
    console.log("Olá, " + nome);
}
saudacaonome("Ana");

function somar(a, b) { // Função com parametro e retorno
    return a + b;
}
console.log(somar(5, 3));

// atividade
function imc(peso, altura) {
    return peso / (altura * altura);
}

console.log(imc(90, 1.90));

function imparpar(num) {
    if (num % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
console.log(imparpar(9));

console.log("************** FUNÇÕES NATIVAS **************");
let agora = new Date();
console.log(agora);

function mostrardatahora() {
    let data = new Date();
     
    console.log("Dia:", data.getDate());
    console.log("Mês:", data.getMonth() + 1);
    console.log("Ano:", data.getFullYear());
    console.log("Hora:", data.getHours());
    console.log("Minuto:", data.getMinutes());

    console.log("Desafio: "+data.getHours(), ".", data.getMinutes(), ".", data.getSeconds(), "", data.getDate(), "/", data.getMonth() + 1, "/", data.getFullYear());
}

mostrardatahora();

console.log(Math.PI);

function calcularOperacoes(numero) {
    console.log("Raiz:", Math.sqrt(numero));
    console.log("Arredondado:", Math.round(numero));
    console.log("Para cima:", Math.ceil(numero));
    console.log("Para baixo:", Math.floor(numero));
    console.log("Quadrado:", Math.pow(numero, 2));
    console.log("Absoluto:", Math.abs(numero))
}
calcularOperacoes(7.8)

console.log("************** Funções string **************");
function analisartexto(texto) {
    console.log("Tamanho:", texto.length);
    console.log("Maíusculo:", texto.toUpperCase());
    console.log("Minúsculo:", texto.toLowerCase());
}
analisartexto("JavaScript");

function verificacao(frase) {
    console.log(frase.includes("JavaScript"));
}
verificacao("Eu estudo JavaScript");

function juntastring(nome, curso) {
    return "Aluno: " + nome + " | Curso: " + curso;
}
console.log(juntastring("José", "Front-End"));