while (true) {
    let nome = prompt("Digite o nome do herói (ou 'sair' para encerrar):");
    if (nome.toLowerCase() === "sair") {
        break;
    }

    let xp = parseInt(prompt("Digite a quantidade de XP do herói:"));
    let nivel = "";

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    alert(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
