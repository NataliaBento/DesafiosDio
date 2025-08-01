//Faça um programa para calcular o valor de uma viagem.

//Você terá 5 variáveis. Sendo elas:
// 1- Preço do etanol;
// 2- Preço do gasolina;
// 3- O tipo de combustível que está no seu carro;
// 4- Gasto médio de combustível do carro por KM;
// 5 - Distância em KM da viagem;

function CalculolitrosCosumidos (distanciaEmKm, kmPorLitros){
    return distanciaEmKm / kmPorLitros;
}

const precoEtanol = 5.79;

const precoGasolina = 6.66;

const kmPorLitros = 10;
const distanciaEmKm = 100;

const tipoCombustível = 'Etanol';

const litrosCosumidos = CalculolitrosCosumidos(distanciaEmKm, kmPorLitros)

if (tipoCombustível === "Etanol"){
    const valorGasto = litrosCosumidos * precoEtanol
    console.log('R$' +valorGasto.toFixed(2));
}else{
    const valorGasto = litrosCosumidos * precoGasolina
    console.log('R$' +valorGasto.toFixed(2));
}

