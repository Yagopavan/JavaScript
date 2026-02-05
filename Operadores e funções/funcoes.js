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
    return peso/ altura*altura;
}
console.log(somar(90,1,90))