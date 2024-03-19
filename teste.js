const chaves = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

const palavra = "gato";
let palavraCodificada = "";
let palavraDecodificada = "";

// Codificar a palavra
for (const letra of palavra) {
    if (chaves[letra]) {
        palavraCodificada += chaves[letra];
    } else {
        palavraCodificada += letra;
    }
}

console.log(`Palavra original: ${palavra}`);
console.log(`Palavra codificada: ${palavraCodificada}`);

// Decodificar a palavra
let i = 0;
while (i < palavraCodificada.length) {
    let encontrouCorrespondencia = false;

    // Loop interno para verificar correspondência no objeto chaves
    for (const chave in chaves) {
        let traducao = chaves[chave];
        console.log("aqui ta a tradução: " + traducao);
        if (palavraCodificada.startsWith(traducao, i)) {
            palavraDecodificada += chave;
            i += traducao.length;
            encontrouCorrespondencia = true;
            break;
        }
    }

    // Se não houver correspondência, manter a parte inalterada
    if (!encontrouCorrespondencia) {
        palavraDecodificada += palavraCodificada[i];
        i++;
    }
}

console.log(`Palavra decodificada: ${palavraDecodificada}`);