const ChromaKeyPlayer = {
  // --- Propriedades (Configurações) ---
  videoElement: null,
  canvasElement: null,
  ctx: null,
  videoSrc: "",

  // --- Métodos ---

  // Método de inicialização: configura tudo
  init: function (videoSrc, onCompleteCallback) {
    this.videoElement = document.getElementById("video-flutuante");
    this.canvasElement = document.getElementById("canvas-flutuante");

    if (!this.videoElement || !this.canvasElement) {
      console.error("Elementos de vídeo ou canvas não encontrados!");
      return;
    }
    this.onComplete = onCompleteCallback;
    const hoje = new Date().toISOString().slice(0, 10);
    localStorage.setItem("videoVistoEm", hoje);
    this.ctx = this.canvasElement.getContext("2d");
    this.videoSrc = videoSrc;
    this.videoElement.src = this.videoSrc; // Define a fonte do vídeo dinamicamente

    this._setupEventListeners();
    this._startAnimation();
  },

  // Configura os "ouvintes" de eventos do vídeo
  _setupEventListeners: function () {
    this.videoElement.addEventListener("play", this._computeFrame.bind(this));
    this.videoElement.addEventListener("ended", this._endAnimation.bind(this));
  },

  // Inicia a coreografia de animação
  _startAnimation: function () {
    setTimeout(() => {
      this.canvasElement.classList.add("visivel");
      this.videoElement.play();
    }, 2000);
  },

  // Finaliza a animação e remove os elementos
  _endAnimation: function () {
    this.canvasElement.classList.remove("visivel");
    this.canvasElement.addEventListener(
      "transitionend",
      () => {
        this.canvasElement.remove();
        this.videoElement.remove();
        if (this.onComplete) {
          this.onComplete();
        }
      },
      { once: true }
    );
  },

  // Processa o frame do vídeo para aplicar o chroma key
  _computeFrame: function () {
    if (this.videoElement.paused || this.videoElement.ended) {
      return;
    }
    this.ctx.drawImage(
      this.videoElement,
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
    let imageData = this.ctx.getImageData(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
    let data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      let r = data[i],
        g = data[i + 1],
        b = data[i + 2];
      if (g > 120 && r < 90 && b < 110) {
        data[i + 3] = 0; // Torna transparente
      }
    }
    this.ctx.putImageData(imageData, 0, 0);
    requestAnimationFrame(this._computeFrame.bind(this));
  },
};

export default ChromaKeyPlayer;
