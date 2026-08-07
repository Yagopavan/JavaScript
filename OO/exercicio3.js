//
class produto {
    constructor(nome, preço, estoque) {
        this.nome = nome;
        this.preco = preço;
        this.estoque = estoque;
    }
    //
    vender() {
        console.log(`${this.nome} Este produto foi vendido `);
    }
    repor() {
        console.log(`${this.nome} Este produto foi reabastecido `);
    }
    alterarpreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`${this.nome} Este produto teve seu preço alterado para ${this.preco}`);
    }
}

//
const produto1 = new produto("Acer Nitro V15", 5500, 4);
console.log("Produto 1:", produto1);
//
const produto2 = new produto("Ajazz ak820", 250, 10);
console.log("Produto 2:", produto2);
//
const produto3 = new produto("Redragon king pro", 150, 15);
console.log("Produto 3:", produto3);
//

//
console.log("--------------Produtos-----------------");
console.log("-----------Produto 1---------------");
console.log("- ", produto1.nome);
console.log("- ", produto1.preco);
console.log("- ", produto1.estoque);
console.log("-----------Produto 2---------------");
console.log("- ", produto2.nome);
console.log("- ", produto2.preco);
console.log("- ", produto2.estoque);
console.log("-----------Produto 3---------------");
console.log("- ", produto3.nome);
console.log("- ", produto3.preco);
console.log("- ", produto3.estoque);

// Demonstrando alteração de preço mesmo sendo `produto1` uma constante
produto1.alterarpreco(5200);
console.log("- Preço atualizado:", produto1.preco);

//
produto2.repor() 
    console.log(`${this.nome} Este produto foi reabastecido `);

//
produto3.vender() 
    console.log(`${this.nome} Este produto foi vendido `);
