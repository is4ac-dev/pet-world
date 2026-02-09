// Importando o módulo para carregar horários disponíveis
import { availableHours } from "../../utils/available-hours.js"

// Importando o módulo para construir as opções de horários disponíveis
import { buildAvailableHours } from "../../utils/buil-available-hours.js"

// Recebendo o elemento de seletor de data para agendamento
const dateScheduleSelector = document.getElementById("schedule-date")

// Esperando um valor ser colocado no seletor de data
dateScheduleSelector.addEventListener("input", (event) => {

  // Recebendo data escolhida
  const date = event.target.value

  // Recebendo horários disponíveis na data escolhida
  const hours = availableHours({ date })

  // Construindo opções de horários disponíveis
  buildAvailableHours(hours)
})
