let input = document.querySelector("#senha"); // Código responsavel por revelar a senha (Esse é do campo de senha).
let botao1 = document.querySelector("#botaosenha");

botao1.addEventListener("click", function () {
    if (input.type === "password") {
        input.setAttribute('type', 'text');
        botao1.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    } else {
        input.setAttribute('type', 'password');
        botao1.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }
});

let input2 = document.querySelector("#senha2");// Codigo responsavel por revelar a senha (Esse é do campo de confirmar senha).
let botao2 = document.querySelector("#botaosenha2");

botao2.addEventListener("click", function () {
    if (input2.type === "password") {
        input2.setAttribute('type', 'text');
        botao2.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    } else {
        input2.setAttribute('type', 'password');
        botao2.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }
});

function validateEmailInput() {
  const emailInput = document.getElementById('email').value;
  const feedbackElement = document.getElementById('alerta');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    feedbackElement.textContent = "email valido"; // Email is valid
  } else {
    feedbackElement.textContent = "Please enter a valid email address.";
  }
}
let botao = document.querySelector("#cadastrar");
let mensagem = document.querySelector("#mensagem");
let nome = document.querySelector("#nome");

botao.addEventListener("click", function () {
    mensagem.textContent = "Cadastrado! Bem-vindo, " + nome.value + "!";
});
