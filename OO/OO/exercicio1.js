//Objeto: BIcicleta
//Atributos: cor, aro, marcha, tipo
//Metodos: pedalar, frear, passar marcha, reduzir marcha

//
class bicicleta {

    //
    constructor(cor, aro, modelo, marcha, tipo) {

        //
        this.cor = cor;
        this.aro = aro;
        this.modelo = modelo;
        this.marcha = marcha;
        this.tipo = tipo;
    }

    pedalar(){
        console.log(`${this.modelo} está pedalando`);
    }
    freiar(){
        console.log(`${this.modelo} está freando`);
    }
    passarMarcha(){
        console.log(`${this.modelo} está passando marcha`);
    }
    reduzirMarcha(){
        console.log(`${this.modelo} está reduzindo marcha`);
    }
}
//Objeto
const bicicleta1 = new bicicleta("Vermelha", 26, "Caloi", 21, "Speed");
console.log("Bicicleta 1:", bicicleta1);

const bicicleta2 = new bicicleta("Preta", 29, "Specialized", 18, "Mountain Bike");
console.log("Bicicleta 2:", bicicleta2);

const bicicleta3 = new bicicleta("Azul", 27, "Trek", 24, "Híbrida");
console.log("Bicicleta 3:", bicicleta3);

console.log("---------------------------------");
console.log("- ", bicicleta1.cor);
console.log("- ", bicicleta1.aro);
console.log("- ", bicicleta1.modelo);
console.log("- ", bicicleta1.marcha);
console.log("- ", bicicleta1.tipo);
console.log("---------------------------------");
//
console.log("---------------------------------");
console.log("- ", bicicleta2.cor);
console.log("- ", bicicleta2.aro);
console.log("- ", bicicleta2.modelo);
console.log("- ", bicicleta2.marcha);
console.log("- ", bicicleta2.tipo);
console.log("---------------------------------");
//
console.log("---------------------------------");
console.log("- ", bicicleta3.cor);
console.log("- ", bicicleta3.aro);
console.log("- ", bicicleta3.modelo);
console.log("- ", bicicleta3.marcha);
console.log("- ", bicicleta3.tipo);
console.log("---------------------------------");

//
bicicleta1.pedalar();
//
bicicleta2.passarMarcha();