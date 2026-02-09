// Importando módulo de Blur
import { toggleBlur } from "../../utils/blur.js"

// Recebendo botão de novo agendamento
const newScheduleBtn = document.getElementById("new-schedule-btn")

// Recebendo botão de cancelar novo agendamento
const cancelNewSchedule = document.getElementById("cancel-button")

// Recebendo sessão de novo agendamento
const newScheduleSection = document.querySelector("dialog")

// Esperando botão de registrar novo agendamento
newScheduleBtn.onclick = () => {
  console.log("Registrando novo agendamento!")

  // Aplicando blur e desabilitando eventos de ponteiro
  toggleBlur(true)

  // Abrindo sessão de novo agendamento
  newScheduleSection.setAttribute("open", true)
}

// Esperando botão de cancelar
cancelNewSchedule.onclick = () => {
  console.log("Cancelando novo agendamento!")

  // Removendo blur e habilitando eventos de ponteiro
  toggleBlur(false)

  // Fechando sessão de novo agendamento
  newScheduleSection.removeAttribute("open")

}