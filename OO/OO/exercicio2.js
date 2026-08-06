//
class aluno {
   // 
    constructor(nome, idade, curso, matrícula, nota) {

        //
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matrícula = matrícula;
        this.nota = nota;
    }

    //
    aprender() {
        console.log(`${this.nome} está estudando uma nova metéria`);
    }
    //
    estudar() {
        console.log(`${this.nome} está estudando!`);
    }
    //
    apresentar() {
        console.log(`${this.nome} está apresentando o trabalho`);
    }

}

//
const aluno1 = new aluno("Anderson", 18, "DS", 7825, 9.5);
console.log("Aluno 1:", aluno1);
//
const aluno2 = new aluno("Bruno", 19, "Qalidade", 7856, 9.0);
console.log("Aluno 2:", aluno2);
//
const aluno3 = new aluno("Yago", 17, "DS", 7867, 10)
console.log("Aluno 3:", aluno3);

//

console.log("--------------DS-----------------");
//
console.log("-----------Aluno 1---------------"),
console.log("- ", aluno1.nome);
console.log("- ", aluno1.idade);
console.log("- ", aluno1.curso);
console.log("- ", aluno1.matrícula);
console.log("- ", aluno1.nota);
console.log("------------Aluno 3---------------");
console.log("- ", aluno3.nome);
console.log("- ", aluno3.idade);
console.log("- ", aluno3.curso);
console.log("- ", aluno3.matrícula);
console.log("- ", aluno3.nota);
//
console.log("-------------Qualidade-------------");
console.log("-----------Aluno 2-----------------");
console.log("- ", aluno2.nome);
console.log("- ", aluno2.idade);
console.log("- ", aluno3.curso);
console.log("- ", aluno3.matrícula);
console.log("- ", aluno3.nota);
console.log("-----------------------------------");
//

aluno1.aprender();
//
aluno2.estudar();
//
aluno3.apresentar();