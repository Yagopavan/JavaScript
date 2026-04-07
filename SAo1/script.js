// Função para formatar telefone
function formatarTelefone(value) {
    // Remove tudo que não é dígito
    value = value.replace(/\D/g, '');

    // Aplica a máscara no campo telefone
    if (value.length <= 11) {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
    }

    return value;
}
function togglePassword(inputId, buttonId) { // Função para mostrar/ocultar senha
    const input = document.querySelector(inputId);
    const button = document.querySelector(buttonId);

    button.addEventListener("click", function () {
        if (input.type === "password") {
            input.setAttribute('type', 'text');
            button.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
        } else {
            input.setAttribute('type', 'password');
            button.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
        }
    });
}

// Aplicar função aos campos de senha
togglePassword("#senha", "#botaosenha");
togglePassword("#senha2", "#botaosenha2");

//-------------------------------------------------------------------
// Adicionar múltiplos telefones
let telefonesDiv = document.querySelector("#telefones");
let botaoAdicionar = document.querySelector("#adicionar-telefone");
let usuarios = []; // Array para armazenar usuários cadastrados

botaoAdicionar.addEventListener("click", function (e) { // Evento para adicionar novo campo de telefone
    e.preventDefault();

    const novoTelefone = document.createElement("div");
    novoTelefone.innerHTML = `
    <input type="text" class="telefone" placeholder="Digite seu telefone" maxlength="15" oninput="this.value = formatarTelefone(this.value)">
    <button type="button" class="remover-telefone">Remover</button><br><br>
  `;

    telefonesDiv.appendChild(novoTelefone);

    // Adicionar evento de remover no novo botão
    novoTelefone.querySelector(".remover-telefone").addEventListener("click", function (e) {
        e.preventDefault();
        novoTelefone.remove();
    });
});

//-------------------------------------------------------------------
// Validações
let emailInput = document.querySelector("#email");
let senha1 = document.querySelector("#senha");
let senha2 = document.querySelector("#senha2");
let botao = document.querySelector("#cadastrar");
let mensagem = document.querySelector("#mensagem");
let nome = document.querySelector("#nome");
let forcaSenha = document.querySelector("#forca-senha");
let confirmacaoSenha = document.querySelector("#confirmacao-senha");
let listaUsuarios = document.querySelector("#lista-usuarios");

botao.disabled = true; // coloquei para abilitar o botão apenas quando as condições forem atendidas

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Função para atualizar lista de usuários
function atualizarListaUsuarios() {
    listaUsuarios.innerHTML = "";
    usuarios.forEach((usuario, index) => {
        const telefonesFormatados = usuario.telefones.map(tel => {
            // Formatar telefone para exibição
            return tel.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        });

        const divUsuario = document.createElement("div");
        divUsuario.style.border = "1px solid #ccc";
        divUsuario.style.padding = "10px";
        divUsuario.style.margin = "5px 0";
        divUsuario.style.borderRadius = "5px";
        divUsuario.innerHTML = `
      <strong>${usuario.nome}</strong><br>
      Email: ${usuario.email}<br>
      Telefones: ${telefonesFormatados.join(", ")}
    `;
        listaUsuarios.appendChild(divUsuario);
    });
}

// Função para validar tudo
function validarFormulario() {
    const email = emailInput.value;
    const senha = senha1.value;
    const confirmacao = senha2.value;
    const nomeUsuario = nome.value;
    const telefones = Array.from(document.querySelectorAll(".telefone"))
        .map(input => input.value.replace(/\D/g, '')) // Remove formatação para validação
        .filter(tel => tel !== "");

    const emailValido = emailRegex.test(email);
    const senhasIguais = senha === confirmacao && senha !== "";
    const nomePreenchido = nomeUsuario.trim() !== "";
    const telefonePreenchido = telefones.length > 0;

    // Validação da força da senha
    const comprimento = senha.length;
    if (comprimento < 4) {
        forcaSenha.textContent = "Senha fraca";
        forcaSenha.style.color = "red";
    } else if (comprimento >= 4 && comprimento <= 8) {
        forcaSenha.textContent = "Senha média";
        forcaSenha.style.color = "orange";
    } else {
        forcaSenha.textContent = "Senha forte";
        forcaSenha.style.color = "green";
    }

    // Validação de confirmação de senha
    if (confirmacao === "") {
        confirmacaoSenha.textContent = "";
    } else if (senhasIguais) {
        confirmacaoSenha.textContent = "Senhas coincidem";
        confirmacaoSenha.style.color = "green";
    } else {
        confirmacaoSenha.textContent = "Senhas não coincidem";
        confirmacaoSenha.style.color = "red";
    }

    // Habilitar/desabilitar botão
    botao.disabled = !(emailValido && senhasIguais && nomePreenchido && telefonePreenchido);
}

// Eventos de input
emailInput.addEventListener("input", validarFormulario);
nome.addEventListener("input", validarFormulario);
senha1.addEventListener("input", validarFormulario);
senha2.addEventListener("input", validarFormulario);

// Adicionar evento para telefones dinâmicos
document.addEventListener("input", function (e) {
    if (e.target.classList.contains("telefone")) {
        validarFormulario();
    }
});

// Cadastro
botao.addEventListener("click", function () {
    // Coletar dados
    const nomeUsuario = nome.value;
    const emailUsuario = emailInput.value;
    const telefonesUsuario = Array.from(document.querySelectorAll(".telefone"))
        .map(input => input.value.replace(/\D/g, '')) // Remove formatação para armazenar apenas números
        .filter(tel => tel !== "");

    // Criar objeto usuário
    const usuario = {
        nome: nomeUsuario,
        email: emailUsuario,
        telefones: telefonesUsuario
    };

    // Adicionar ao array
    usuarios.push(usuario);

    // Atualizar lista
    atualizarListaUsuarios();

    // Mensagem de sucesso
    mensagem.textContent = "Cadastrado! Bem-vindo, " + nomeUsuario + "!";

    // Limpar formulário (opcional)
    nome.value = "";
    emailInput.value = "";
    senha1.value = "";
    senha2.value = "";
    document.querySelectorAll(".telefone").forEach(input => input.value = "");
    forcaSenha.textContent = "";
    confirmacaoSenha.textContent = "";
    botao.disabled = true;
});