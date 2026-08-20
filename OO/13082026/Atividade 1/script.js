class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        return this.preco - (this.preco * this.desconto / 100);
    }

    exibirNaTela() {

        const resultado = document.querySelector("#resultado");

        

            resultado.innerHTML = `
            <p><strong>Nome:</strong> ${this.nome} </p>
            <p><strong>Preço:</strong> ${this.preco} </p>
            <p><strong>Categoria:</strong> ${this.categoria} </p>
            <p><strong>Desconto:</strong> ${this.desconto} </p>
            <p><strong>Preço Final:</strong> ${this.aplicarDesconto()} % </p>
            
            `;
    }
}




const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastro = document.querySelector("#botaoCadastro");



botaoCadastro.addEventListener("click", function()  {

    const produto = new Produto(
        nome.value,
        preco.value,
        categoria.value,
        desconto.value
    );

    produto.aplicarDesconto();
    localStorage.setItem("produto", JSON.stringify(produto));
    produto.exibirNaTela();
    nome.value = "";
    preco.value = "";
    categoria.value = "";
    desconto.value = "";
    nome.focus();
    
});

const Dados = localStorage.getItem("produto");

if (Dados) {
    const produtoSalvo = JSON.parse(Dados);

    const produto = new Produto(
        produtoSalvo.nome,
        produtoSalvo.preco,
        produtoSalvo.categoria,
        produtoSalvo.desconto
    );  

    produto.exibirNaTela();
};