
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const curso = document.querySelector("#curso");
const matricula = document.querySelector("#matricula");
const botaoCadastrar = document.querySelector("#botaoCadastrar");

class Aluno {
    constructor(nome, idade, curso, matricula) {
        this.name = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    estudar() {
        console.log(`${this.name} está estudando`);
    }

    apresentar() {
        console.log(`${this.name} está apresentando`);
    }


}

class Turma {
    constructor() {
        this.alunos = [];
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    exibirNaTela() {

        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        this.alunos.forEach((alunoCadastrado) => {

            resultado.innerHTML += `
                <div class="aluno">
                    <p>Nome: ${alunoCadastrado.name}</p>
                    <p>Idade: ${alunoCadastrado.idade}</p>
                    <p>Curso: ${alunoCadastrado.curso}</p>
                    <p>Matrícula: ${alunoCadastrado.matricula}</p>
                </div>
            `;
        });
    }
}
const turma = new Turma();

botaoCadastrar.addEventListener("click", () => {

    const aluno = new Aluno(nome.value, idade.value, curso.value, matricula.value);

    turma.adicionarAluno(aluno);
    turma.exibirNaTela();
});
