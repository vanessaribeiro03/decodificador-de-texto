const tela = document.querySelector("body");
const entradaTexto = document.querySelector("#texto-de-entrada");
const botaoCriptografar = document.querySelector(".botao-de-criptografar");
const botaoDescriptografar = document.querySelector(".botao-de-descriptografar");
const mensagemAlerta = document.querySelector(".mensagem-de-alerta");
const imagemMensagem = document.querySelector(".mostrar-mensagem img");
const tituloMensagem = document.querySelector(".mostrar-mensagem h3");
const paragrafoMensagem = document.querySelector(".mostrar-mensagem p");
const textareaMensagem = document.querySelector("#texto-de-saida");
const botaoCopiar = document.querySelector(".botao-de-copiar");

const tamanhoTela = tela.offsetWidth;

let palavrasCriptografadas = [];
let palavrasDescriptografadas = [];

function criptografarPalavras(evento) {
  evento.preventDefault();
  evento.stopPropagation();

  let novaPalavra = "";
  palavrasCriptografadas = [];
  textareaMensagem.value = "";

  if (
    entradaTexto.value === entradaTexto.value.toLowerCase() &&
    entradaTexto.value !== "" &&
    !entradaTexto.value.includes("à") &&
    !entradaTexto.value.includes("á") &&
    !entradaTexto.value.includes("é") &&
    !entradaTexto.value.includes("ê") &&
    !entradaTexto.value.includes("í") &&
    !entradaTexto.value.includes("ó") &&
    !entradaTexto.value.includes("ô") &&
    !entradaTexto.value.includes("ú") &&
    !entradaTexto.value.includes("ç") &&
    !entradaTexto.value.includes("ã") &&
    !entradaTexto.value.includes("õ")
  ) {
    mensagemAlerta.style.color = "var(--cinza-400)";

    imagemMensagem.style.display = "none";
    tituloMensagem.style.display = "none";
    paragrafoMensagem.style.display = "none";

    textareaMensagem.style.display = "block";
    botaoCopiar.style.display = "block";

    let palavras = entradaTexto.value.split(" ");

    for (let palavra of palavras) {
      for (let i = 0; i < palavra.length; i++) {
        let letra = palavra[i];
        if (letra === "a") {
          novaPalavra += "ai";
        } else if (letra === "e") {
          novaPalavra += "enter";
        } else if (letra === "i") {
          novaPalavra += "imes";
        } else if (letra === "o") {
          novaPalavra += "ober";
        } else if (letra === "u") {
          novaPalavra += "ufat";
        } else {
          novaPalavra += letra;
        }
      }
      novaPalavra += " ";
      palavrasCriptografadas.push(novaPalavra);
      novaPalavra = "";
    }

    textareaMensagem.value = palavrasCriptografadas.join(" ");
  } else {
    mensagemAlerta.style.color = "#f30000";

    if (tamanhoTela > 1024) {
      imagemMensagem.style.display = "block";
    }

    tituloMensagem.style.display = "block";
    paragrafoMensagem.style.display = "block";

    textareaMensagem.style.display = "none";
    botaoCopiar.style.display = "none";
  }
}

function descriptografarPalavras(evento) {
  evento.preventDefault();
  evento.stopPropagation();

  let novoTexto = "";
  textareaMensagem.value = "";

  if (
    entradaTexto.value === entradaTexto.value.toLowerCase() &&
    entradaTexto.value !== "" &&
    !entradaTexto.value.includes("à") &&
    !entradaTexto.value.includes("á") &&
    !entradaTexto.value.includes("é") &&
    !entradaTexto.value.includes("ê") &&
    !entradaTexto.value.includes("í") &&
    !entradaTexto.value.includes("ó") &&
    !entradaTexto.value.includes("ô") &&
    !entradaTexto.value.includes("ú") &&
    !entradaTexto.value.includes("ç") &&
    !entradaTexto.value.includes("ã") &&
    !entradaTexto.value.includes("õ")
  ) {
    mensagemAlerta.style.color = "var(--cinza-400)";

    imagemMensagem.style.display = "none";
    tituloMensagem.style.display = "none";
    paragrafoMensagem.style.display = "none";

    textareaMensagem.style.display = "block";
    botaoCopiar.style.display = "block";

    let texto = entradaTexto.value;

    novoTexto = texto
      .replaceAll("ai", "a")
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");

    textareaMensagem.value = novoTexto;
  } else {
    mensagemAlerta.style.color = "#f30000";

    if (tamanhoTela > 1024) {
      imagemMensagem.style.display = "block";
    }

    tituloMensagem.style.display = "block";
    paragrafoMensagem.style.display = "block";

    textareaMensagem.style.display = "none";
    botaoCopiar.style.display = "none";
  }
}

function copiarTexto(evento) {
    evento.preventDefault();
    evento.stopPropagation();
  
    textareaMensagem.select();
    document.execCommand("copy");
  }
  
  botaoCopiar.addEventListener("click", (evento) => {
    copiarTexto(evento);
  });
  
  botaoCriptografar.addEventListener("click", (evento) => {
    criptografarPalavras(evento);
  });
  
  botaoDescriptografar.addEventListener("click", (evento) => {
    descriptografarPalavras(evento);
});
