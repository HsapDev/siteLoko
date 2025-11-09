document.addEventListener("DOMContentLoaded", function() {
  
  // --- DEFINA SUA SENHA AQUI ---
  const senhaCorreta = "0801"; // <<< MUDE ISSO!
  // -----------------------------

  const senhaDigitada = prompt("❤️ Qual é a nossa senha?");
  const container = document.querySelector(".container");

  if (senhaDigitada === senhaCorreta) {
    // --- SENHA CORRETA ---
    
    // 1. Mostra o conteúdo da página
    container.classList.remove("container-oculto"); 

    // 2. Roda seu script de mensagem aleatória
    const mensagens = [
      "Hoje eu lembrei de você quando...",
      "Um detalhe seu que eu amo: ...",
      "Se você ler isso, saiba que eu tô com saudade.",
      "Você não sai da minha cabeça hoje.",
      "Pensando no seu sorriso...",
      "Minha maior sorte foi te encontrar.",
      "Mal posso esperar para te ver de novo."
    ];
    const indiceAleatorio = Math.floor(Math.random() * mensagens.length);
    const mensagemSorteada = mensagens[indiceAleatorio];
    document.getElementById("mensagem-aleatoria").innerText = mensagemSorteada;

  } else {
    // --- SENHA INCORRETA ---
    
    // Remove o container (para o caso de alguém tentar inspecionar e mostrar)
    if (container) {
      container.remove(); 
    }

    // Mostra uma mensagem de erro na página
    const erroMsg = document.createElement("h1");
    erroMsg.innerText = "⛔ Senha incorreta ⛔";
    erroMsg.style.color = "#cc3366";
    erroMsg.style.textAlign = "center";
    erroMsg.style.marginTop = "40px";
    document.body.appendChild(erroMsg);
  }
});