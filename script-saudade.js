document.addEventListener("DOMContentLoaded", function() {

  const botao = document.getElementById("botao-saudade");
  const resultadoDiv = document.getElementById("resultado-saudade");

  // --- CONFIGURAÇÃO DAS SURPRESAS ---
  // Adicione suas frases, fotos e áudios aqui
  
  const frases = [
    "Você Ilumina meu dia",
    "Eu quero sempre estar com você",
    "Minha Pitica case - se comigo",
    "Meu bebê, nao perde tempo, me liga"
  ];

  const audios = [
    "audio/oi-amor.opus",  // TROQUE ISSO
    "audio/saudade.opus"   // TROQUE ISSO
  ];
  // --- FIM DA CONFIGURAÇÃO ---


  // Adiciona o evento de clique ao botão
  botao.addEventListener("click", mostrarSurpresa);

  function mostrarSurpresa() {
    // Limpa o resultado anterior
    resultadoDiv.innerHTML = "";

    // Sorteia o tipo de surpresa (0 = frase, 1 = foto, 2 = audio)
    const tipo = Math.floor(Math.random() * 3); 

    if (tipo === 0) {
      // --- Mostrar Frase ---
      const i = Math.floor(Math.random() * frases.length);
      const fraseSorteada = frases[i];
      // Reusa a classe "mensagem" do seu CSS
      resultadoDiv.innerHTML = `<p class="mensagem">${fraseSorteada}</p>`;

    } else {
      // --- Mostrar Áudio ---
      const i = Math.floor(Math.random() * audios.length);
      const audioSorteado = audios[i];
      // O 'autoplay' faz tocar sozinho, e 'controls' deixa a pessoa pausar/repetir
      resultadoDiv.innerHTML = `<audio controls autoplay src="${audioSorteado}">
                                  Seu navegador não suporta áudio.
                                </audio>`;
    }
  }
});