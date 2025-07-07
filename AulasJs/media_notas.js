/* Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua media 
e a sua classificação conforme a tabela abaixo

Media = (nota 1 + nota 2 + nota 3) / 3;

Classificação:

- Media menor que 5, reprovação;
- Media entre 5 e 7, recuperação;
- Media acima de 7, passou de semestre;
*/

function media(nota1, nota2, nota3){
    return (nota1 + nota2 + nota3) / 3
}

function classificarMedia(media){
        if (media < 5) {
        return (`O Aluno teve media: ${media}, ele está REPROVADO`)
    }else if (media > 5 && media<=7){
        return (`O aluno teve a media: ${media}, ele está em RECUPERAÇÃO`)
    }else if (media > 7){
        return (`O aluno teve média: ${media} e foi aprovado por media`)
    }
}

(function () {
    let nota1 = 10

    let nota2 = 10

    let nota3 = 10

    let resultadoMedia= media(nota1, nota2, nota3);
    let resultadoFinal= classificarMedia(resultadoMedia);

    console.log(resultadoFinal)
})();




