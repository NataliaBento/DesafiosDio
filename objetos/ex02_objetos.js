/* 
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas deve ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamda José que tenha 70kg e 1,75 de altura e pela ao José 
    para dizer o valor do seu IMC;

*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    CalculoImc (){
    return this.peso / Math.pow(this.altura, 2).toFixed(2);
}

    ClassificarImc(){
        const imc = this.CalculoImc();
         if (imc < 18.5) {
        return (`Seu IMC é de ${imc.toFixed(2)}, você está abaixo do peso!`)
    } else if (imc >= 18.5 && imc <= 25){
        return (`Seu IMC é de ${imc.toFixed(2)}, você está com seu peso normal!`)
    }else if (imc > 25 && imc <= 30){
        return (`Seu IMC é de ${imc.toFixed(2)}, você está acima do peso!`)
    }else if (imc > 30 && imc <= 40){
        return (`Seu IMC é de ${imc.toFixed(2)}, você está obeso!`)
    }else if (imc > 40){
        return (`Seu imc é de: ${imc.toFixed(2)}, você está com obesidade grave`)
    }
    }
};

const jose = new Pessoa ('José', 70, 1.75);
const natalia = new Pessoa ('Natalia', 81, 1.56);

console.log(natalia.ClassificarImc());
