/* Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua media 
e a sua classificação conforme a tabela abaixo

Media = (nota 1 + nota 2 + nota 3) / 3;

Classificação:

- Media menor que 5, reprovação;
- Media entre 5 e 7, recuperação;
- Media acima de 7, passou de semestre;
*/

nota1 = 1

nota2 = 10

nota3 = 2

media = (nota1 + nota2 + nota3) / 3

if (media < 5) {
    console.log(`O launo teve media: ${media}, ele está REPROVADO`)
}else if (media > 5 && media<=7){
    console.log(`O aluno teve a media: ${media}, ele está em RECUPERAÇÃO`)
}else if (media > 7){
    console.log(`O aluno teve média: ${media} e foi aprovado por media`)
}