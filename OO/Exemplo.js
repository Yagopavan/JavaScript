// Classe
class Carro {

    //
    constructor(marca, modelo, ano, cor) {

        //
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    ligar(){
        console.log("O carro está ligado");
    }
    desligar(){
        console.log("O carro está desligado");
    }
    //
    acelerar(){
        console.log("O carro está acelerando");
    }

    //
    frear(){
        console.log(`${this.modelo} está freando`);
    }

}
//objeto 
const carro1 = new Carro("Volkswagen", "Gol", 2020, "Prata");
console.log("Carro 1:", carro1);

//
const carro2 = new Carro("Chevrolet", "Onix", 2021, "Preto");
console.log("Carro 2:", carro2);

//
const carro3 = new Carro("Fiat", "Marea", 2005, "Vermelho");
console.log("Carro 3:", carro3);

console.log("---------------------------------");
console.log("-", carro1.marca);
console.log("- ",carro1.modelo);
console.log("- ",carro1.ano);
console.log("- ",carro1.cor);
console.log("---------------------------------");

//

console.log("---------------------------------");
console.log("- ", carro2.marca);
console.log("- ", carro2.modelo);
console.log("- ", carro2.ano);
console.log("- ", carro2.cor);
console.log("---------------------------------");

//
carro1.ligar(); 
//
carro2.frear();
//
carro1.desligar();
