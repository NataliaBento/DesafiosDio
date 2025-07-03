/* Faça um programa para calcular o valor de uma viagem. 

Você terá 3 variáveis. Sendo elas:

1- Preço do combustível;
2- Gasto médio de combustível do carro por KM;
3- Distância em KM da viagem;

*/
const precoCombustivel = 5.79;

const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosCosumidos = distanciaEmKm / kmPorLitros * precoCombustivel;

console.log('R$' +litrosCosumidos.toFixed(2));










