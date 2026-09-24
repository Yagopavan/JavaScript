const API_KEY = "e3b114bcbe46719d12f11b48b3fef6e9";

// Elementos da interface
const campoPesquisa = document.getElementById("campoPesquisa");
const btnPesquisar = document.getElementById("btnPesquisar");
const noticias = document.getElementById("noticias");

// Eventos de busca
btnPesquisar.addEventListener("click", buscarNoticias);
campoPesquisa.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        buscarNoticias();
    }
});

async function buscarNoticias() {
    const pesquisa = campoPesquisa.value.trim();

    if (pesquisa === "") {
        alert("Digite algo para pesquisar.");
        return;
    }

    // Exibe mensagem de carregamento
    noticias.innerHTML = "<p>Carregando notícias...</p>";

    try {
        const url =
            `https://gnews.io/api/v4/search` +
            `?q=${encodeURIComponent(pesquisa)}` +
            `&lang=pt` +
            `&max=10` +
            `&apikey=${API_KEY}`;

        const resposta = await fetch(url);

        if (!resposta.ok) {
            if (resposta.status === 401 || resposta.status === 403) {
                throw new Error("Chave da API inválida ou não autorizada.");
            } else if (resposta.status === 429) {
                throw new Error("Limite diário de requisições da API atingido.");
            } else {
                throw new Error(`Erro na API (${resposta.status}): ${resposta.statusText}`);
            }
        }

        const dados = await resposta.json();
        exibirNoticias(dados.articles || []);

    } catch (erro) {
        console.error(erro);
        noticias.innerHTML = `
            <p style="color: red;">
                ${erro.message || "Não foi possível carregar as notícias."}
            </p>
        `;
    }
}

function exibirNoticias(artigos) {
    noticias.innerHTML = "";

    if (!artigos || artigos.length === 0) {
        noticias.innerHTML = `
            <p>Nenhuma notícia encontrada.</p>
        `;
        return;
    }

    artigos.forEach(artigo => {
        const card = document.createElement("article");
        card.classList.add("card");

        const imagem = artigo.image
            ? `<img src="${artigo.image}" alt="${artigo.title}">`
            : "";

        card.innerHTML = `
            ${imagem}
            <div class="card-conteudo">
                <h3>${artigo.title}</h3>
                <p>
                    ${artigo.description || "Sem descrição disponível."}
                </p>
                <small>
                    ${artigo.source ? artigo.source.name : ""}
                </small>
                <a
                    href="${artigo.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ler notícia →
                </a>
            </div>
        `;

        noticias.appendChild(card);
    });
}