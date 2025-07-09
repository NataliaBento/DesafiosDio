
class Carro {
    cor;
    marca;
    cambio;
    anoDoCarro;

    constructor (cor,marca, cambio, anoDoCarro ) {
        this.cor = cor;
        this.marca = marca;
        this.cambio = cambio;
        this.anoDoCarro = 2025 - anoDoCarro;
    }

    Descrever() {
        console.log(`O carro da cor ${this.cor}, da marca ${this.marca}, esta disponível e ele tem cambio ${this.cambio}`);
    }
};


const carro1 = new Carro('amarelo', 'creta', 'automatico', 10);
const carro2 = new Carro('branco', 'gol', 'manual', 2);

console.log(carro1);
console.log(carro2);




