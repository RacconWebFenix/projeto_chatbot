// main.js - Com ajuste fino no botão "Voltar"

import ChromaKeyPlayer from "./ChromaKeyPlayer.js";
import { getVideoSrcBasedOnTime } from "./utils.js";
import tutorialFlows from "./flows.js";

document.addEventListener("DOMContentLoaded", () => {
  // --- LÓGICA DO VÍDEO DE BOAS-VINDAS (SÓ NA PÁGINA /VENDEDORES/) ---
  if (window.location.pathname === "/vendedores/") {
    const hoje = new Date().toISOString().slice(0, 10);
    const ultimaExibicao = localStorage.getItem("videoVistoEm");

    if (ultimaExibicao === hoje) {
      mostrarIconeDeAjuda();
    } else {
      const horaManual = null;
      const agora = new Date();
      const horaAtual = horaManual !== null ? horaManual : agora.getHours();
      const caminhoStaticBase = "/static/core/video/";
      const videoParaTocar = getVideoSrcBasedOnTime(
        horaAtual,
        caminhoStaticBase
      );
      ChromaKeyPlayer.init(videoParaTocar, () => {
        localStorage.setItem("videoVistoEm", hoje);
        mostrarIconeDeAjuda();
      });
    }
  }

  // --- LÓGICA PARA O WIDGET DE AJUDA ---
  const helpIcon = document.querySelector(".help-icon");
  const chatWidget = document.querySelector(".chat-widget");

  if (helpIcon && chatWidget) {
    helpIcon.addEventListener("click", () => {
      chatWidget.classList.toggle("chat-widget--hidden");
      if (!chatWidget.classList.contains("chat-widget--hidden")) {
        renderMainMenu();
      }
    });
  }

  // --- LÓGICA DO MODAL DE VÍDEO ---
  const videoModal = document.getElementById("video-modal");
  const closeModalButton = document.querySelector(".video-modal__close-button");
  const videoPlayer = document.querySelector(".video-modal__video-player");

  if (closeModalButton && videoModal && videoPlayer) {
    closeModalButton.addEventListener("click", () => {
      videoModal.classList.add("video-modal--hidden");
      videoPlayer.pause();
      videoPlayer.src = "";
    });
  }
});

// --- Funções de Renderização do Widget ---

function mostrarIconeDeAjuda() {
  const helpIcon = document.querySelector(".help-icon");
  if (helpIcon) {
    helpIcon.classList.add("help-icon--visible");
  }
}

// Mostra o menu principal ("Cotações", "Pedidos")
function renderMainMenu() {
  const optionsContainer = document.querySelector(".chat-widget__options");
  const bodyContainer = document.querySelector(".chat-widget__body");

  // MELHORIA: Limpa os dois containers para garantir que o menu esteja sempre limpo
  optionsContainer.innerHTML = "";
  bodyContainer.innerHTML = "";

  const menuItems = Object.keys(tutorialFlows);

  menuItems.forEach((itemText) => {
    const button = createButton(itemText);
    button.addEventListener("click", () => {
      renderVideoList(itemText);
    });
    optionsContainer.appendChild(button);
  });
}

// Mostra a lista de vídeos de uma categoria específica
function renderVideoList(category) {
  const optionsContainer = document.querySelector(".chat-widget__options");
  const bodyContainer = document.querySelector(".chat-widget__body");
  optionsContainer.innerHTML = "";
  bodyContainer.innerHTML = "";

  const videoList = tutorialFlows[category];

  videoList.forEach((videoData) => {
    const button = createButton(videoData.title);
    button.addEventListener("click", () => {
      playVideoInModal(videoData.videoFile);
    });
    optionsContainer.appendChild(button);
  });

  // O botão Voltar é criado SOMENTE aqui, na lista de vídeos
  const backButton = createButton("⬅️ Voltar ao menu principal");
  backButton.addEventListener("click", renderMainMenu);
  bodyContainer.appendChild(backButton);
}

// Abre o modal e toca o vídeo selecionado
function playVideoInModal(videoFile) {
  // ... (código existente) ...
  const videoModal = document.getElementById("video-modal");
  const videoPlayer = document.querySelector(".video-modal__video-player");
  const caminhoStaticBase = "/static/core/video/";

  if (videoModal && videoPlayer) {
    videoPlayer.src = `${caminhoStaticBase}${videoFile}`;
    videoModal.classList.remove("video-modal--hidden");
    videoPlayer.play();
  }
}

// Função helper para criar botões
function createButton(text) {
  const button = document.createElement("button");
  button.className = "chat-widget__button";
  button.textContent = text;
  return button;
}
