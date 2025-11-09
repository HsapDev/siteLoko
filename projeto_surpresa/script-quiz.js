document.addEventListener("DOMContentLoaded", function() {
  
  const resultadoDiv = document.getElementById("quiz-resultado");
  const botoes = document.querySelectorAll("#quiz-opcoes button");

  // --- PERSONALIZE SUAS RESPOSTAS AQUI ---
  // A 'key' (ex: 'cafe') DEVE ser a mesma do 'data-resposta' no HTML.
  const respostas = {
    cafe: "Quero meu pão com mortadela e queijo hein e NAO MORDA MEU PÃO ",
    filme: "Meu programa favorito! Ficar de conchinha no sofá com você é tudo.",
    passeio: "Bora! Adoro explorar o mundo de mãos dadas com você."
  };
  // --- FIM DA PERSONALIZAÇÃO ---


  botoes.forEach(botao => {
    
    botao.addEventListener("click", () => {
      // 1. Pega o identificador do botão (ex: "cafe")
      const escolha = botao.dataset.resposta; 
      
      // 2. Busca a sua resposta personalizada no objeto
      const textoResposta = respostas[escolha];

      // 3. Exibe a resposta na tela
      resultadoDiv.innerHTML = `<p class="mensagem">${textoResposta}</p>`;
    });

  });

});