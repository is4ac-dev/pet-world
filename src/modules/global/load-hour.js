// Importando o módulo para carregar horários disponíveis
import { availableHours } from "../../utils/available-hours.js"

// Importando o módulo para construir as opções de horários disponíveis
import { buildAvailableHours } from "../../utils/build-available-hours.js"

import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"

// Recebendo o elemento de seletor de data para agendamento
const dateScheduleSelector = document.getElementById("schedule-date")

// Esperando um valor ser colocado no seletor de data
dateScheduleSelector.addEventListener("input", async (event) => {

  // Recebendo data escolhida
  const date = event.target.value

  // Buscando na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })

  // Recebendo horários disponíveis na data escolhida
  const hours = availableHours({ date, dailySchedules })

  // Construindo opções de horários
  buildAvailableHours(hours)
})
