/* 
    1- Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio, de combustível por quilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso. 
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    CalcularGasto (distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
   
};

const uno = new Carro ('fiat', 'preto', 1/12);

console.log(uno.CalcularGasto(70,5));