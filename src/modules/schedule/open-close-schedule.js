// Importando módulo de Blur
import { toggleBlur } from "../../utils/blur.js"

// Importando o módulo para carregar horários disponíveis
import { availableHours } from "../../utils/available-hours.js"

// Importando o módulo para construir as opções de horários disponíveis
import { buildAvailableHours } from "../../utils/build-available-hours.js"
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"

// Recebendo botão de novo agendamento
const newScheduleBtn = document.getElementById("new-schedule-btn")

// Recebendo botão de cancelar novo agendamento
const cancelNewSchedule = document.getElementById("cancel-button")

// Recebendo sessão de novo agendamento
const newScheduleSection = document.querySelector("dialog")

// Esperando botão de registrar novo agendamento
newScheduleBtn.onclick = async () => {

  // Aplicando blur e desabilitando eventos de ponteiro
  toggleBlur(true)

  // Por padrão: Carregando data atual
  const date = new Date()

  // Buscando na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })

  // Verificando horários disponíveis a partir da data atual
  const hours = availableHours({ date, dailySchedules })

  // Construindo opções de horários disponíveis
  buildAvailableHours(hours)

  // Abrindo sessão de novo agendamento
  newScheduleSection.setAttribute("open", true)
}

// Esperando botão de cancelar
cancelNewSchedule.onclick = () => {

  // Removendo blur e habilitando eventos de ponteiro
  toggleBlur(false)

  // Fechando sessão de novo agendamento
  newScheduleSection.removeAttribute("open")

}