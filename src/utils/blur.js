// Recendo elementos para trabalhar o desfoque
const aside = document.querySelector("aside")
const main = document.querySelector("main")
const button = document.getElementById("new-schedule-btn")

// Função para aplicar blur
export function blurTrue(){

  // Desabilitando eventos de ponteiro
  aside.style.pointerEvents = "none"
  main.style.pointerEvents = "none"
  button.style.pointerEvents = "none"

  // Aplicando blur nos elementos traseiros
  aside.style.filter = "blur(5px)"
  main.style.filter = "blur(5px)"
  button.style.filter = "blur(5px)"
}