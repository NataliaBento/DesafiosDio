function sayMyName (name) {
    return ('Meu nome é: ' + name);
}

sayMyName('Natalia');

function verificarIdade (idade){
    if (idade >= 18) {
        return ('Você é maior de idade!');
    } else {
        return ('Você ainda é não atingiu a maior idade!');
    }
}

function main() {
    const idade = 15;

    const resultado = verificarIdade(idade);

    console.log(resultado);
}

main();