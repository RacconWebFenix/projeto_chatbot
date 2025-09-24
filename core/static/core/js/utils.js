// core/js/utils.js (Corrigido)

// Função para decidir o vídeo com base na hora
function getVideoSrcBasedOnTime(hour, staticPath) {
  if (hour >= 5 && hour < 12) {
    return `${staticPath}bom-dia.mp4`; // Bom dia
  } else if (hour >= 12 && hour < 18) {
    return `${staticPath}boa-tarde.mp4`; // Boa tarde
  } else {
    return `${staticPath}boa-noite.mp4`; // Boa noite
  }
}

export { getVideoSrcBasedOnTime };