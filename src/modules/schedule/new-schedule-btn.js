// Importando módulo de Blur
import { blurTrue } from "../../utils/blur.js"

// Recebendo botão de novo agendamento
const newScheduleBtn = document.getElementById("new-schedule-btn")

// Recebendo sessão de novo agendamento
const newScheduleSection = document.querySelector("dialog")

// Esperando botão ser clicado
newScheduleBtn.onclick = () => {
  console.log("Registrando novo agendamento!")

  // Aplicando blur e desabilitando eventos de ponteiro
  blurTrue()

  // Abrindo sessão de novo agendamento
  newScheduleSection.setAttribute("open", true)
}