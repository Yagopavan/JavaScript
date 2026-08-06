//
class produto {
    constructor(nome, preço, estoque) {
        this.name = nome;
        this.preço = preço;
        this.estoque = estoque  
    }
    //
    vender() {
        console.log(`${this.nome} Este produto foi vendido `);
    }
    
}