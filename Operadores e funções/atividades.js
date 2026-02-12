console.log("*** Atividades ***");

function mostrardatahora() {
    let data = new Date();
     console.log(""+data.getHours(), ".", data.getMinutes(), ".", data.getSeconds(), "", data.getDate(), "/", data.getMonth() + 1, "/", data.getFullYear());
}
mostrardatahora()

console.log(Math.PI);

function somaMedia(){
    let num1 = Number(prompt("Digite o primeiro numero:"));
    let num2 = Number(prompt("Digite o segundo numero:"));
    let soma = num1 + num2;
    let media = (soma / 2);
    console.log("A soma é:", soma);
    console.log("A média é:", media)
}
somaMedia()

function nome() {
    let nome = prompt("Qual seu nome:");
    console.log("Tamanho:", nome.length);
    console.log("Maíusculo:", nome.toUpperCase());
}
nome()

function verificacao() {
    let frase = prompt("Digite a frase:");
    console.log(frase.includes("HTML"));
}
verificacao()


