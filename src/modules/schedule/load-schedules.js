// Importando módulo seletor de dia
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"

// Importando módulo para verificar disponibilidade dos horários
import { availableHours } from "../../utils/available-hours.js"

// Importando módulo para construir opções dos horários
import { buildAvailableHours } from "../../utils/build-available-hours.js"

// Recebendo o elemento de seletor de data da agenda
const dateAgendaSelector = document.getElementById("schedule-date")

// Esperando pela seleção de um horário
dateAgendaSelector.addEventListener("input", async (event) => {
  
  // Recebendo dia selecionado
  const date = event.target.value

  // Requisitando agendamentos da API
  const dailySchedules = await scheduleFetchByDay({ date })

  // Verificando horários disponíveis a partir da data selecionada
  const hours = availableHours({ date, dailySchedules })

  // Construindo opções de horários
  buildAvailableHours(hours)
})
