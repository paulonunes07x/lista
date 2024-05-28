function nomeAleatorio() {
    var nomes = ["Alice", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gustavo", "Helena", "Igor", "Juliana"];
    var indiceAleatorio = Math.floor(Math.random() * nomes.length);
    return nomes[indiceAleatorio];
}

console.log(nomeAleatorio());