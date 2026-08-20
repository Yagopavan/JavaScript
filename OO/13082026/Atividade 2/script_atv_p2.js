const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastro = document.querySelector("#botaoCadastro");
const chaveLocalStorage = "produtos";

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
        const produtosSalvos = JSON.parse(localStorage.getItem(chaveLocalStorage)) || [];
        this.produtos = produtosSalvos.map((produto) => new Produto(
            produto.nome,
            produto.preco,
            produto.categoria,
            produto.desconto
        ));
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
        this.salvarProdutos();
    }

    removerProduto(indice) {
        this.produtos.splice(indice, 1);
        this.salvarProdutos();
    }

    salvarProdutos() {
        localStorage.setItem(chaveLocalStorage, JSON.stringify(this.produtos));
    }

    exibirNaTela() {

        const resultado = document.querySelector("#resultado");
        resultado.innerHTML = "";

        this.produtos.forEach((produto, indice) => {

            resultado.innerHTML += `
                <div class="produto">
                    <p>Produto: ${produto.nome}</p>
                    <p>Preço: R$ ${produto.preco}</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Desconto: ${produto.desconto}%</p>
                    <p>Preço Final: R$ ${produto.aplicarDesconto()}</p>
                    <button class="excluir-produto" data-indice="${indice}">Excluir</button>
                </div>
            `;

        });
    }
}

const estoque = new Estoque();

estoque.exibirNaTela();

document.querySelector("#resultado").addEventListener("click", (evento) => {
    if (!evento.target.classList.contains("excluir-produto")) return;

    const indice = Number(evento.target.dataset.indice);
    estoque.removerProduto(indice);
    estoque.exibirNaTela();
});

botaoCadastro.addEventListener("click", () => {

    const produto = new Produto(
        nome.value,
        preco.value,
        categoria.value,
        desconto.value
    );

    estoque.adicionarProduto(produto);
    estoque.exibirNaTela();

    nome.value = "";
    preco.value = "";
    categoria.value = "";
    desconto.value = "";
    nome.focus();
});
