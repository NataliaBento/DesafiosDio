
const notas = [];

notas.push(1);
notas.push(0);
notas.push(1);
notas.push(2);
notas.push(5);
notas.push(1);

let soma = 0;

for (let i = 0; i < notas.length; i++){
    const nota = notas[i]
    soma = soma + nota
}

const media = soma / notas.length;
console.log(media)

if (media > 7) {
    console.log('Voce esta aprovado')
}else{
    console.log('Voce esta reprovado')
}