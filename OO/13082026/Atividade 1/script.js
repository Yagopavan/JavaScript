const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastro = document.querySelector("#botaoCadastro");

class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = Number(preco);
        this.categoria = categoria;
        this.desconto = Number(desconto);
    }

    aplicarDesconto() {
        return this.preco - (this.preco * this.desconto / 100);
    }
}

class Estoque {

    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos = [produto];
    }

    exibirNaTela() {

        const resultado = document.querySelector("#resultado");
        resultado.innerHTML = "";

        this.produtos.forEach(produto => {

            resultado.innerHTML += `
                <div class="produto">
                    <p>Produto: ${produto.nome}</p>
                    <p>Preço: R$ ${produto.preco}</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Desconto: ${produto.desconto}%</p>
                    <p>Preço Final: R$ ${produto.aplicarDesconto()}</p>
                </div>
            `;

        });
    }
}

const estoque = new Estoque();

botaoCadastro.addEventListener("click", () => {

    const produto = new Produto(
        nome.value,
        preco.value,
        categoria.value,
        desconto.value
    );

    estoque.adicionarProduto(produto);
    estoque.exibirNaTela();
});