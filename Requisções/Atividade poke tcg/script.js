const btnConsultar = document.querySelector("#btnConsultar");
const nomePokemon = document.querySelector("#nomePokemon");
const status = document.querySelector("#status");
const resultado = document.querySelector("#resultado");

btnConsultar.addEventListener("click", async () => {
    const nome = nomePokemon.value.trim();

    if (!nome) {
        status.textContent = "Digite o nome de um Pokémon.";
        resultado.innerHTML = "";
        return;
    }

    status.textContent = "Carregando cartas...";
    resultado.innerHTML = "";

    try {
        const parametros = new URLSearchParams({
            q: `name:"${nome}"`,
            page: "1",
            pageSize: "20"
        });
        const resposta = await fetch(`https://api.pokemontcg.io/v2/cards?${parametros}`);

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        if (dados.data.length === 0) {
            status.textContent = "Nenhuma carta encontrada.";
            return;
        }

        status.textContent = `${dados.data.length} cartas encontradas.`;

        dados.data.forEach(carta => {
            resultado.innerHTML += `
                <article class="card">
                    <img src="${carta.images.small}" alt="Carta ${carta.name}">
                    <h2>${carta.name}</h2>
                    <p><strong>Tipo:</strong> ${carta.types?.join(", ") || "Não informado"}</p>
                    <p><strong>Raridade:</strong> ${carta.rarity || "Não informada"}</p>
                    <p><strong>Coleção:</strong> ${carta.set.name}</p>
                </article>
            `;
        });
    } catch (erro) {
        console.error("Erro ao buscar cartas:", erro);
        status.textContent = "";
        resultado.innerHTML = '<p class="erro">Erro ao buscar as cartas.</p>';
    }
});
